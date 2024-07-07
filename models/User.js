const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: [true, 'Please enter an email'],
		unique: true,
		lowercase: true,
		validate: [isEmail, 'Please enter a valid email'],
	},
	password: {
		type: String,
		unique: false,
		required: [true, 'Please enter an password'],
		minlength: [6, 'Minumum password length is 6 characters'],
	},
});

// fire a func before doc saved to DB
userSchema.pre('save', async function () {
	const salt = await bcrypt.genSalt();
	this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('user', userSchema);
module.exports = User;
