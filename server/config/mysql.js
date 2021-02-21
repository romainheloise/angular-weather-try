const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Titslovin-06",
  database: "anguweather",
});

module.exports = pool.promise();
