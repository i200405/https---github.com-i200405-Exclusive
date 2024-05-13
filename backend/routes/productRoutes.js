const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Get all products - Version 1
router.get('/v1/products', productController.getAllProducts);

// Get a single product by ID - Version 1
router.get('/v1/products/:id', productController.getProductById);

// Create a new product - Version 1
router.post('/v1/products', productController.createProduct);

// Update an existing product - Version 1
router.put('/v1/products/:id', productController.updateProduct);

// Delete a product - Version 1
router.delete('/v1/products/:id', productController.deleteProduct);

module.exports = router;
