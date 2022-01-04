const express = require('express');
const router = express.Router();

// Creating a route
// @route   GET api/auth
// @desc    Test route
// @access  Public (no authentication needed)
router.get('/', (req, res) => res.send('Auth route'));

module.exports = router;