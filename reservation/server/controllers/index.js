const models = require('../models');

module.exports = {
  checkout: {
    get: (req, res) => {
      models.checkout.get().then(() => {
        res.send();
      })
    },

    post: (req, res) => {
      models.checkout.post().then(() => {
        res.send();
      })
    }
  }
};