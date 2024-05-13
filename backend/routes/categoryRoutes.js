const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// Define routes with version prefix
router.get('/v1/categories', categoryController.getAllCategories);
router.post('/v1/categories', categoryController.createCategory);
router.get('/v1/categories/:id', categoryController.getCategoryById);
router.put('/v1/categories/:id', categoryController.updateCategory);
router.delete('/v1/categories/:id', categoryController.deleteCategory);

module.exports = router;
