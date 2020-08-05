const express = require('express');
const router = express.Router();
const { 
    getCategories, 
    postCategories, 
    getCategory,
    deleteCategory,
    patchCategory
} 
= require('../controllers/CategoryController');

router.get('/', getCategories);

router.post('/', postCategories);

router.get('/:id', getCategory);

router.patch('/:id', patchCategory);

router.delete('/:id', deleteCategory);

module.exports = router;