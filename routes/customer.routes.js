const Router = require('koa-router');

const { createCustomer, getAllCustomers, getCustomer, updateCustomer, deleteCustomer } = require('../controllers/customer.controller');

const router = new Router(
    {
        prefix: '/customer'
    }
);

router.post('/', createCustomer);
router.get('/', getAllCustomers);
router.get('/:_id', getCustomer);
router.put('/:_id', updateCustomer);
router.delete('/:_id', deleteCustomer);

module.exports = router;