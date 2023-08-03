const express = require('express');

const router = express.Router();

// *** Do add Middlewares here ***
router.use('/', require('./userRoutes'));
router.use('/mentor', require('./mentor'));

module.exports = router;