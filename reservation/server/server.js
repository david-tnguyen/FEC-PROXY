const express = require('express');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3002;
const cors = require('cors');
const router = require('./routes.js');

// Allow CORS
app.use(cors());

// Log all 4xx and 5xx responses
app.use(morgan('dev'));

// Log all requests to access.log
app.use(morgan('common', {
  stream: fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
}));

// Parse all requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve public folder
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.use('/', router);

// Listen for requests
app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
