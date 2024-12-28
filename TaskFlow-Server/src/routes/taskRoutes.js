// routes/taskRoutes.js
const express = require('express');
const { createTask, getTasks } = require('../controllers/taskController');
const { authenticate } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authenticate, createTask); 
router.get('/', authenticate, getTasks);    

module.exports = router;
