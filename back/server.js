const express = require('express');
const app = express();
const http = require('http');

let clientID = '3c6fe50146e44fd285baa70b52cbed2b'
let clientSecret = '53eed7e2a2aa47de9f31491a9b27fdae'
let redirectURI = 'http://localhost:8080/callback'

let baseURL = 'https://api.spotify.com'

app.listen(8080, () => {
    console.log('Server Started on http://localhost:8080');
	console.log('Press CTRL + C to stop server');
});