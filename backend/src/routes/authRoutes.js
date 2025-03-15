const express = require('express');
const router = express.Router();
const { checkAuth } = require('../controllers/authController');
const authMiddleware = require('../middleware/auth');

router.get('/check', authMiddleware, checkAuth);
//There's no need routes for login, register or logout since Supabase handles those for us.

module.exports = router;