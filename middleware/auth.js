const jwt = require('jsonwebtoken');
const config = require('config');

/* 
    Middleware function, access to request and response function, 
    Gets the token from the header that contains 'x-auth-token'
    Checks if the token there is a token, returns 401 if there is no token
    Finally if there is a token, it verifies the token by decoding it.
    If its valid, it will save the decoded user into req.user which we can use it in
    any protected routes that requires the user profile.
*/
module.exports = function (req, res, next) {
	// Get token from header
	const token = req.header('x-auth-token');

	// Check if not token
	if (!token) {
		return res.status(401).json({ msg: 'No token, authorization denied' });
	}

	// Verify token
	try {
		const decoded = jwt.verify(token, config.get('jwtSecret'));

		req.user = decoded.user;
		next();
	} catch (errr) {
		res.status(401).json({ msg: 'Token is not valid' });
	}
};
