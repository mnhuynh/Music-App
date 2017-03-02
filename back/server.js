const express = require('express');
const app = express();
const request = require('request');
const bodyParser = require('body-parser');
const http = require('http');
const https = require('https');

let clientID = '3c6fe50146e44fd285baa70b52cbed2b'
let clientSecret = '53eed7e2a2aa47de9f31491a9b27fdae'
let redirectURI = 'http://localhost:8080/callback'

let baseURL = 'https://api.spotify.com/'

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
    request("https://api.spotify.com/v1/search?q=tania%20bowra&type=artist", (error, response, body) => {
        console.log(body);
        res.send(body);
    })
})

app.post('/post', (req, res) => {
    res.json('posting')
})

app.listen(8080, () => {
    console.log('Server Started on http://localhost:8080');
	console.log('Press CTRL + C to stop server');
});