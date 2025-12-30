const express = require('express');
const router = express.Router();
const v1Routes = require('./v1');
const cursorRoutes = require('./cursor');

// OpenAI v1 API routes
router.use('/v1', v1Routes);
router.use('/cursor', cursorRoutes);

module.exports = router;
