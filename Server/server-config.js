var express = require('express');
var bodyParser = require('body-parser');
var Path = require('path');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var handler = require('./utils/requestHandler.js');
var db = require('./middleware/dbHandlers');

var root = Path.join(__dirname, '../Client/dist');

var app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(root));
app.set('trust proxy', 1);
app.use(session({
  secret:'NOT TELLING', 
  resave: false, 
  saveUninitialized: false
}));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authoriztion');
  next();
});


//app.use('/', handler.createUserSession);

app.get('/api/setUser', handler.checkSession);

app.post('/api/newuser', handler.createUser);

//app.use('/*', handler.createUserSession, handler.navToLink);

// app.use('/logout', handler.logOut);

module.exports = app;