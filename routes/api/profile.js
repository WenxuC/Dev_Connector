const express = require('express');
const router = express.Router();

// Creating a route
// @route   GET api/profile
// @desc    Test route
// @access  Public (no authentication needed)
router.get('/', (req, res) => res.send('Profile route'));

module.exports = router;