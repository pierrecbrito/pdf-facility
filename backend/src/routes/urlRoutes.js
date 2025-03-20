const express = require('express');
const router = express.Router();
const { convertUrlToPdf } = require('../controllers/urlController');
const authMiddleware = require('../middleware/auth');

router.post('/convert/:uniqueId', authMiddleware, convertUrlToPdf);

module.exports = router;