const User = require('../models/User')

// handle errors
const handleErrors = err => {
	let errors = { email: '', password: '' }

	// duplicate user error 
	if(err.code === 11000){
		errors.email = 'That email is already registered'
		return errors
	}

	// validation errors
	if (err.message.includes('user validation failed')) {
		// object..values tworzy mi tablice - wiec przechodze po niej za pomoca forEach -> w tablicy mam obiekty, a w obiektach zagniezdzone obiekty z roznymi wartoscami, mnie interesuje propeties, bo jest tam message odnosnie bledu i gdzie ten blad wystepuje czyli path, wiec destruktyruzje sobie properties z obiektow i mam dostep bezposrednio do path i message, ktore w latwy sposob nadpisuje w moim let errors powzyej - SMART
		Object.values(err.errors).forEach(({ properties }) => {
			errors[properties.path] = properties.message
		})gitgitgit 

module.exports.signup_get = (req, res) => {
	res.render('signup', { title: 'signup' })
}

module.exports.login_get = (req, res) => {
	res.render('login', { title: 'login in' })
}

//  POST METHODS
module.exports.signup_post = async (req, res) => {
	const { email, password } = req.body
	try {
		const user = await User.create({ email, password })
		res.status(201).json(user)
	} catch (err) {
		const errors = handleErrors(err)
		res.status(400).json({ errors })
	}
}

module.exports.login_post = async (req, res) => {
	const { email, password } = req.body
	try {
	} catch (err) {}
}
