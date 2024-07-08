const jwt = require('jsonwebtoken');
const User = require('../models/User');

const requireAuth = (req, res, next) => {
	const token = req.cookies.jwt;
	if (token) {
		jwt.verify(token, 'non visible secret', (err, decodedToken) => {
			if (err) {
				console.log(err.message);
				res.redirect('/login');
			} else {
				next();
			}
		});
	} else {
		res.redirect('/login');
	}
};

// check current user
const checkUser = (req, res, next) => {
	const token = req.cookies.jwt;
	if (token) {
		jwt.verify(token, 'non visible secret', async (err, decodedToken) => {
			if (err) {
				console.log('errpr', err.message);
				res.locals.user = null;
				next();
			} else {
				console.log('dziala', decodedToken);
				let user = await User.findById(decodedToken.id);
				res.locals.user = user;

				next();
			}
		});
	} else {
		res.locals.user = null;
		next();
	}
};

module.exports = { requireAuth, checkUser };
