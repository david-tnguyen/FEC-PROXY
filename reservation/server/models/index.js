const db = require('../db');

module.exports = models = {
  checkout: {
    get: (cb) => {
      db.query('SELECT * FROM checkout', function (err, results) {
        if (err) throw err;
        cb(results);
      });
    },

    post: (checkout, cb) => {
      db.queryAsync(`INSERT INTO checkout SET ?`, checkout, (err, results) => {
        if (err) {
          console.log(err);
        }
        console.log(`Inserted record ${JSON.stringify(checkout)}`);
        cb();
      });
    }
  }
};