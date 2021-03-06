"use strict";

var express = require('express');

var morgan = require('morgan');

var bodyParser = require("body-parser");

var path = require('path');

var fs = require('fs');

var app = express();
var port = 3002;

var cors = require('cors');

var router = require('./routes.js'); // Allow CORS


app.use(cors()); // Log all 4xx and 5xx responses

app.use(morgan('dev')); // Log all requests to access.log

app.use(morgan('common', {
  stream: fs.createWriteStream(path.join(__dirname, 'access.log'), {
    flags: 'a'
  })
})); // Parse all requests

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json()); // Serve public folder

app.use(express["static"](path.join(__dirname, '../public'))); // Routes

app.use('/', router); // Listen for requests

app.listen(port, function () {
  console.log("server running at: http://localhost:".concat(port));
});
