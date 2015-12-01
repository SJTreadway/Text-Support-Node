var express = require('express'),
	cors = require('cors'),
	bodyParser = require('body-parser'),
	Firebase = require('firebase'),
	userId = 'AC9cf0dc74ef8ebdec8c0946d14716c4f9',
	authToken =  '9b13fca1a7273ea57a7da69053f75c06',
	client = require('twilio')(userId, authToken),
	app = express();
	

	app.use(cors());
	app.use(bodyParser.json());
	app.use(express.static(__dirname+'/public'));

	app.listen(8080, function() {
			console.log('Now listening on port 8080...')
		});

	app.post('/support/messages/', function(req, res) {
		client.messages.create({ 
			to: "+12056572689", 
			from: "+12053169128",
			body: req.body.message,   
		}, function(err, message) {
			var ref = new Firebase('https://texxt-support.firebaseio.com/numbers/' +  message.to);
			ref.push({
				date: message.date_created,
				message: message.body
			});
			return res.json(message);
		});
});