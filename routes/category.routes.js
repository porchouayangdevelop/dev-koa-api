const Router = require('koa-router');
const {
    getCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory
} = require('../controllers/category.controller');
const router = new Router({
    prefix: '/category'
});

router.get('/', getCategories);
router.get('/:_id', getCategory);
router.post('/', createCategory);
router.put('/:_id', updateCategory);
router.delete('/:_id', deleteCategory);

module.exports = router;
    
