var SLACK_WEBHOOK_PATH = '';

var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	qs = require('querystring'),
	https = require('https');

app.use(bodyParser.json());

app.all('/', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Content-Type, X-Requested-With");
	next();
});

app.post('/', function(req, res) {
	console.log(req.body);

	if(req.body && req.body.name && req.body.message) {

		var body = JSON.stringify({
			"username": req.body.name,
			"text": req.body.message
		});

		var req = https.request({
			protocol: 'https:',
			host: 'hooks.slack.com',
			path: SLACK_WEBHOOK_PATH,
			method: 'POST',
			headers: {
				"Content-type": "application/json"
			}
		}, function(res) {
			res.on('data', function(data) {
				console.log(data.toString('utf8'));
			})
			.on('end', function(data) {
				console.log(data);
			});
		});

		req.write(body);
		req.end();
	}

	res.send('');
});

app.listen(9000);
