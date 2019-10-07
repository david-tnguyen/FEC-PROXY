const mysql = require('mysql');

// local
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'airbnb',
});

// AWS
// const connection = mysql.createConnection({
//   host: 'aa1bprj5p4fw8ux.cgzwebiqlghu.us-west-1.rds.amazonaws.com',
//   user: 'allenbui',
//   password: 'allenbui',
//   database: 'ebdb',
//   port: 3306,
// });

// const connection = mysql.createConnection({
//   host: process.env.RDS_HOSTNAME,
//   user: process.env.RDS_USERNAME,
//   password: process.env.RDS_PASSWORD,
//   port: process.env.RDS_PORT,
//   database: process.env.RDS_DB_NAME,
// });

connection.connect();


const insertIntoDB = (id, likes, username, link, tag, photoSet) => {
  const sql = `INSERT INTO photos (id, likes, username, link, tag, photo_set)
               VALUES ('${id}', '${likes}', '${username}', '${link}', '${tag}', '${photoSet}')`;

  connection.query(sql, (err, row) => {
    if (err) {
      console.log(err);
    }
  });
};

const retrieve = (callback) => {
  const sql = `SELECT *
               FROM photos`;

  connection.query(sql, (err, row) => {
    if (err) {
      throw err;
    } else {
      callback(row);
    }
  });
};

// connection.end();

module.exports = {
  insertIntoDB,
  retrieve,
  // connectAsync,
};
