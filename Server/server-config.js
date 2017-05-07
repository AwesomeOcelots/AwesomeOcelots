var express = require('express');
var bodyParser = require('body-parser');
var Path = require('path');


var root = Path.join(__dirname, '../Client/dist');

var handler = require('./utils/requestHandler.js')


var app = express();

app.use(bodyParser.json());

app.use(express.static(root));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authoriztion');
  next();
});


app.get('/', handler.createUserSession)

module.exports = app;