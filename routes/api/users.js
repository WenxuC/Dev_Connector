const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// Creating a route
// @route   POST api/users
// @desc    Register User
// @access  Public (no authentication needed)
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    // if there is errors send a 400 bad request and a description of the errors
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    return res.send('User route');
  }
);

module.exports = router;
