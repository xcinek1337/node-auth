const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

app.set('view engine', 'ejs');

const DB_URI = 'mongodb+srv://marcin:qwerty123@cluster0.q0rddgu.mongodb.net/node-auth';

mongoose
	.connect(DB_URI)
	.then((result) => app.listen(3000))
	.catch((err) => console.log(err));

// routes
app.get('/', (req, res) => res.render('home', { title: 'Home' }));

app.get('/smoothies', (req, res) => res.render('smoothies', { title: 'Smoothies recipes' }));

app.use(authRoutes);

// cookies

app.get('/set-cookies', (req, res) => {
	// res.setHeader('Set-Cookie', 'newUser=true');
	res.cookie('newUser', true);
	res.cookie('isEmployee', true, { maxAge: 1000 * 133, httpOnly: true });
	res.send('you got he cookies!');
});

app.get('/read-cookies', (req, res) => {
	const cookies = req.cookies;
	console.log(cookies);

	res.json(cookies);
});

// 404 error
app.use((req, res) => {
	res.status(404).render('404', { title: '404' });
});
