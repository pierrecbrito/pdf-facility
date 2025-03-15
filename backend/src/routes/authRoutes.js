const express = require('express');
const router = express.Router();
const { checkAuth } = require('../controllers/authController');
const authMiddleware = require('../middleware/auth');

router.get('/check', authMiddleware, checkAuth);

module.exports = router;