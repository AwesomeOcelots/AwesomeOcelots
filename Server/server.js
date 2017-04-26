var express = require('express');
var bodyParser = require('body-parser');
var Path = require('path');

var root = Path.join(__dirname, '../Client');
var app = express();

var PORT = process.env.PORT || 3002;
var IP = '127.0.0.1';


app.use(bodyParser.json());

app.use(express.static(root));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authoriztion');
  next();
});


app.listen(PORT, () =>{
  console.log('IT LIVES!!! @', PORT);
})