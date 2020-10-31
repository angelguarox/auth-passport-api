const mongoose = require('mongoose');
const {database, options} = require('./keys');

mongoose.connect(database.URI, options)
	.then(db => console.log('DATABASE: CONNECTED'))
	.catch(err => console.error('DATABASE: NOT CONNECTED', err));
