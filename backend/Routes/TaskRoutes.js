const express = require('express');
const router = express.Router();
const { get_Tasks,create_Task } = require('../Controllers/TaskController.js');
const authMiddleware = require('../Middlewares/authMiddleware.js');

// Define routes using your controller functions
router.get('/',authMiddleware, get_Tasks);
router.post('/create',authMiddleware ,create_Task);


module.exports = router;
