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