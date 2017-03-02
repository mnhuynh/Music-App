const express = require('express');
const app = express();
const request = require('request');
const bodyParser = require('body-parser');
const http = require('http');
const https = require('https');

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// search bar
// playlist

app.get('/', (req, res) => {
    // console.log("get request?");
    // request("", (error, response, body) => {
    //     console.log(body);
    //     res.send(body);
    // })
})

app.post('/post', (req, res) => {
    res.json('posting')
})

app.listen(8080, () => {
    console.log('Server Started on http://localhost:8080');
	console.log('Press CTRL + C to stop server');
});