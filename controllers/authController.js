const User = require('../models/User');
const jwt = require('jsonwebtoken');

// handle errors
const handleErrors = (err) => {
	console.log(err.message, err.code);
	let errors = { email: '', password: '' };

	// incorrect email
	if (err.message === 'incorrect email') {
		errors.email = 'incorrect email';
	}
	// incorrect password
	if (err.message === 'incorrect password') {
		errors.password = 'incorrect password';
	}

	// duplicate user error
	if (err.code === 11000) {
		errors.email = 'That email is already registered';
		return errors;
	}

	// validation errors
	if (err.message.includes('user validation failed')) {
		// object..values tworzy mi tablice - wiec przechodze po niej za pomoca forEach -> w tablicy mam obiekty, a w obiektach zagniezdzone obiekty z roznymi wartoscami, mnie interesuje propeties, bo jest tam message odnosnie bledu i gdzie ten blad wystepuje czyli path, wiec destruktyruzje sobie properties z obiektow i mam dostep bezposrednio do path i message, ktore w latwy sposob nadpisuje w moim let errors powzyej - SMART
		Object.values(err.errors).forEach(({ properties }) => {
			errors[properties.path] = properties.message;
		});
	}

	return errors;
};
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
	return jwt.sign({ id }, 'non visible secret', { expiresIn: maxAge });
};

module.exports.signup_get = (req, res) => {
	res.render('signup', { title: 'signup' });
};

module.exports.login_get = (req, res) => {
	res.render('login', { title: 'login in' });
};

//  POST METHODS
module.exports.signup_post = async (req, res) => {
	const { email, password } = req.body;
	try {
		const user = await User.create({ email, password });
		const token = createToken(user._id);
		res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
		res.status(201).json({ user: user._id });
	} catch (err) {
		const errors = handleErrors(err);
		res.status(400).json({ errors });
	}
};

module.exports.login_post = async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await User.login(email, password);
		const token = createToken(user._id);
		res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
		res.status(200).json({ user: user._id });
	} catch (err) {
		const errors = handleErrors(err);
		res.status(400).json({ errors });
	}
};

module.exports.logout_get = async (req, res) => {
	try {
		res.cookie('jwt', '', { maxAge: 1 });
		res.redirect('/');
	} catch (error) {}
};
