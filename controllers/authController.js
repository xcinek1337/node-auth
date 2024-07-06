module.exports.signup_get = (req, res) => {
	res.render('signup', { title: 'signup' });
};

module.exports.login_get = (req, res) => {
	res.render('login', { title: 'login in' });
};

//  POST METHODS
module.exports.signup_post = (req, res) => {
	res.send('zarejestrowales sie wariaice');
};

module.exports.login_post = (req, res) => {
	res.send('zalogowales sie wariacie');
};
