const express = require('express');
const router = express.Router();

// Creating a route
// @route   GET api/users
// @desc    Test route
// @access  Public (no authentication needed)
router.get('/', (req, res) => res.send('User route'));

module.exports = router;