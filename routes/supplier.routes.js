const Router = require('koa-router');
const {
    getAllSuppliers,
    getSupplier,
    createSupplier,
    updateSupplier,
    deleteSupplier
} = require('../controllers/supplier.controller');
const router = new Router({
    prefix: '/supplier'
});

router.get('/', getAllSuppliers);
router.get('/:_id', getSupplier);
router.post('/', createSupplier);
router.put('/:_id', updateSupplier);
router.delete('/:_id', deleteSupplier);


module.exports = router;