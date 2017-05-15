var mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'root',
  password: 'Codingpass892',
  database: 'greener'
});

connection.connect();


module.exports = connection;