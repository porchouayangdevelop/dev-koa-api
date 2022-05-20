const mongoose = require('mongoose');
require('dotenv').config();
const { MONGO_URL } = process.env;

exports.connect = ()=>{
    try {
        mongoose.connect(
            MONGO_URL,
            {
                useUnifiedTopology: true,
                useNewUrlParser: true,
            })
            .then(()=>{
                console.log(`Connected MongoDB Successfully`)
            })
            .catch((e)=>{
                console.log("database connection failed. exiting now...");
                console.error(e);
                process.exit(1);
            });
    }
    catch (e) {
        console.log(e);
    }

}
