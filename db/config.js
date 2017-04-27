var mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'greener'
});

connection.connect();


module.exports = connection;