const express = require('express');
const router = express.Router();
const { convertUrl } = require('../controllers/urlController');
const authMiddleware = require('../middleware/auth');

router.post('/convert', authMiddleware, convertUrl);

module.exports = router;