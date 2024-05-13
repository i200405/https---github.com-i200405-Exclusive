const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    stock: { type: Number, required: true },
    imageUrl: { type: String } // Optional: URL to the image of the product
});

module.exports = mongoose.model('Product', productSchema);
