const Order = require('../models/order');

exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate('user').populate('orderItems.product');
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id).populate('user').populate('orderItems.product');
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createOrder = async (req, res) => {
    const order = new Order({
        user: req.body.user,
        orderItems: req.body.orderItems,
        shippingAddress: req.body.shippingAddress,
        paymentMethod: req.body.paymentMethod,
        taxPrice: req.body.taxPrice,
        shippingPrice: req.body.shippingPrice,
        totalPrice: req.body.totalPrice
    });
    try {
        const newOrder = await order.save();
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateOrder = async (req, res) => {
    try {
        const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(order);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteOrder = async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);
        res.status(204).json({ message: 'Order deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
