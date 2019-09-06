const models = require('../models');

module.exports = {
  checkout: {
    get: (req, res) => {
      models.checkout.get((results) => {
        res.send(results);
      });
    },

    post: (req, res) => {
      models.checkout.post(req.body, () => {
        res.end();
      });
    }
  }
};

// Checkout dates
// app.get('/checkout', (req, res) => {
//   controller.getRecords((results) => {
//     res.send(results);
//   });
// });

// // Checkout user
// app.post('/', (req, res) => {
//   controller.insertRecord(req.body, () => {
//     res.end();
//   });
// });
