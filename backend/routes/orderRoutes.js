const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Define routes with version prefix
router.get('/v1/orders', orderController.getAllOrders);
router.post('/v1/orders', orderController.createOrder);
router.get('/v1/orders/:id', orderController.getOrderById);
router.put('/v1/orders/:id', orderController.updateOrder);
router.delete('/v1/orders/:id', orderController.deleteOrder);

module.exports = router;
