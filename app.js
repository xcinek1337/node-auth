const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

const DB_URI =
	'mongodb+srv://marcin:qwerty123@cluster0.q0rddgu.mongodb.net/node-auth';

mongoose
	.connect(DB_URI)
	.then((result) => app.listen(3000))
	.catch((err) => console.log(err));

app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));
