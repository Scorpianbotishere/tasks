const express = require('express');
const router = express.Router();
const { register_User, login_User, get_User } = require('../Controllers/UserController.js');
const authMiddleware = require('../Middlewares/authMiddleware.js');

// Define routes using your controller functions
router.post('/register', register_User);
router.post('/login', login_User);
router.get('/profile',authMiddleware, get_User);

module.exports = router;
