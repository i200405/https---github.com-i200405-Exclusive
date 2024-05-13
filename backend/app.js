const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const productRoutes = require('./routes/productRoutes'); // Make sure this path is correct
const categoryRoutes = require('./routes/categoryRoutes');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');


const app = express();

// Middleware
app.use(cors());  // Enables CORS
app.use(express.json());  // Parses incoming JSON requests

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.log('Failed to connect to MongoDB', err));

// Example route
app.get('/', (req, res) => {
    res.send('Hello from E-commerce Shop Backend!');
});

// Product routes
app.use('/api', productRoutes); 
app.use('/api/v1/categories', categoryRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/orders', orderRoutes);

// Define port and start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;  // Export for potential testing and flexibility
