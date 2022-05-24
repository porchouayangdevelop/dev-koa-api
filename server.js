const koa = require('koa');
const cors = require('koa-cors');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const json = require('koa-json');
require('dotenv').config();
const serve = require('koa-static');

require('./config/config').connect();

const mime = require('mime-types');
const multer = require('koa-multer');
const fs = require('fs');

const PORT = process.env.PORT || 5000;
const app = new koa();

// Middleware
app.use(cors());
app.use(bodyParser());
app.use(json());
app.use(logger());

app.use(serve('.'));
app.use(serve('/public/uploads'));

app.use(serve(__dirname + '/public/uploads'));


app.use(async (ctx, next) => {
    await next();
    const rt = ctx.response.get('X-Response-Time');
    console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time
app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
});


app.use(async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        ctx.status = err.status || 500;
        ctx.body = {
            message: err.message,
            error: err,
        };
        ctx.app.emit('error', err, ctx);
    }
});

// x-access-token
app.use(async (ctx, next) => {
    const token = ctx.request.header['x-access-token'];
    if (token) {
        try {
            const decoded = await jwt.verify(token, process.env.JWT_SECRET);
            ctx.state.user = decoded;
        } catch (err) {
            console.log(err);
        }
    }
    await next();
});

// x-access-header
app.use(async (ctx, next) => {
    const token = ctx.request.header['x-access-header'];
    if (token) {
        try {
            const decoded = await jwt.verify(token, process.env.JWT_SECRET);
            ctx.state.user = decoded;
        } catch (err) {
            console.log(err);
        }
    }
    await next();
});

// contet-type
app.use(async (ctx, next) => {
    ctx.response.type = 'application/json';
    await next();
});

// controll-allow-origin
app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    await next();
});

// controll-allow-methods
app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    await next();
});

// controll-allow-headers
app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-access-token');
    await next();
});

// controll-allow-headers-content-type-origin-x-requested-with
app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Origin, x-requested-with, Accept');
    await next();
});


// set-image-type
app.use(async (ctx, next) => {
    ctx.set('Content-Type', 'image/jpeg');
    await next();
});





// Routes
const path = require('./path');
const admin = require('./routes/admin.routes');
const supplier = require('./routes/supplier.routes');
const category = require('./routes/category.routes');
// const product = require('./routes/product.routes');
// const upload = require('./routes/upload.routes');


// Use Routes
app.use(path.routes());
app.use(admin.routes());
app.use(supplier.routes());
app.use(category.routes());
// app.use(product.routes());
// app.use(upload.routes());

app.on('error', (err, ctx) => {
    console.error('server error', err, ctx);
});


// Listen
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});