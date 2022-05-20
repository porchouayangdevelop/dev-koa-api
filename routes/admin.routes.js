const Router = require('koa-router');
const { getUser, getUsers, signUp, signIn, putUser, deleteUser } = require('../controllers/admin.controller');

const router = new Router(
    {
        prefix: '/admin'
    }
);

router.post('/', signUp);
router.post('/signIn', signIn);
router.get('/', getUsers);
router.get('/:_id', getUser);
router.put('/:_id', putUser);
router.delete('/:_id', deleteUser);

module.exports = router; 


