const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define routes with version prefix
router.get('/v1/users', userController.getAllUsers);
router.post('/v1/users/register', userController.registerUser);
router.post('/v1/users/login', userController.loginUser);
router.get('/v1/users/:id', userController.getUserById);
router.put('/v1/users/:id', userController.updateUser);
router.delete('/v1/users/:id', userController.deleteUser);

module.exports = router;
