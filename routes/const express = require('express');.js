const express = require('express');
const router = express.Router();
const { getAttendanceSummary } = require('../controllers/analyticsController');

// Assuming an auth middleware exists to protect routes for authenticated admins.
const { protect, admin } = require('../middleware/authMiddleware');

router.get('/attendance-summary', protect, admin, getAttendanceSummary);

module.exports = router;