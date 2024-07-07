const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(express.static('public'));
app.use(express.json())

app.set('view engine', 'ejs');

const DB_URI = 'mongodb+srv://marcin:qwerty123@cluster0.q0rddgu.mongodb.net/node-auth';

mongoose
	.connect(DB_URI)
	.then((result) => app.listen(3000))
	.catch((err) => console.log(err));

app.get('/', (req, res) => res.render('home', { title: 'Home' }));

app.get('/smoothies', (req, res) => res.render('smoothies', { title: 'Smoothies recipes' }));

app.use(authRoutes);

app.use((req, res) => {
	res.status(404).render('404', { title: '404' });
});
