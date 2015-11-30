var express = require('express'),
	cors = require('cors'),
	bodyParser = require('body-parser'),
	firebase = require('firebase'),
	userId = 'AC9cf0dc74ef8ebdec8c0946d14716c4f9',
	authToken =  '9b13fca1a7273ea57a7da69053f75c06',
	app = express(),
	ref = new firebase('https://texxt-support.firebaseio.com/numbers');

	app.use(cors());
	app.use(bodyParser.json());
	app.use(express.static(__dirname+'/public'));

	app.listen(8080, function() {
			console.log('Now listening on port 8080...')
		});