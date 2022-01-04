const express = require('express');
const router = express.Router();

// Creating a route
// @route   GET api/post
// @desc    Test route
// @access  Public (no authentication needed)
router.get('/', (req, res) => res.send('Post route'));

module.exports = router;