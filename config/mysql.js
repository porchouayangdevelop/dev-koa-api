const mysql = require('mysql');

var con = mysql.createConnection({
  host: "hostname",
  user: "username",
  password: "password"
});

module.exports = con;
