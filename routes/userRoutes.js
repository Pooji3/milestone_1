// const express = require('express');
// const router = express.Router();
// const userController = require('../controllers/userController');

// // Define a route for user registration
// router.post('/register', userController.register);

// // Define a route for user login
// router.post('/login', userController.login);

// module.exports = router;

// userRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

// Register route
router.post('/register', userController.registerUser);

// Login route
router.post('/login', userController.loginUser);

module.exports = router;