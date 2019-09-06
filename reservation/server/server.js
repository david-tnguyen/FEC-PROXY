const express = require('express');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const path = require('path');
const fs = require('fs');
const controller = require('./controllers');
const app = express();
const port = 3002;
const cors = require('cors');

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

// Checkout dates
app.get('/checkout', (req, res) => {
  controller.getRecords((results) => {
    res.send(results);
  });
});

// Checkout user
app.post('/', (req, res) => {
  controller.insertRecord(req.body, () => {
    res.end();
  });
});

// Listen for requests
app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
