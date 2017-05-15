var express = require('express');
var bodyParser = require('body-parser');
var Path = require('path');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var handler = require('./utils/requestHandler.js');
var db = require('./middleware/dbHandlers');
var MySQLStore = require('express-mysql-session')(session);
var cityInfo = require('./middleware/cityinfo');
var wikipedia = require("node-wikipedia");
var traffic = require('./middleware/traffictime');
var root = Path.join(__dirname, '../client/dist');
var weather = require('./middleware/weather');

var app = express();

var sessionStore = new MySQLStore({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'greener',
  checkExpriationInterval: 900000,
  expiration: 31556952000,
  createDatabaseTable: true,
  connectionLimit: 1,
  schema: {
    tableName: 'sessions',
    columnNames: {
      session_id: 'session_id',
      expires: 'expires',
      data: 'data'
    }
  }
});

app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(root));
app.set('trust proxy', 1);
app.use(session({
  cookie: {
    originalMaxAge: 31556952000,
    httpOnly: false
  },
  key: 'session_cookie_name',
  secret:'session_cookie_secret',
  store: sessionStore, 
  resave: true, 
  saveUninitialized: true
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

app.get('/cityinfo', (req, res) => {
    cityInfo(res);
});

app.get('/traffic', (req, res) => {
  traffic(['16 Jessie St San Francisco CA 94105'],['565 3rd Ave San Francisco'], res);
});

app.get('/weather', (req, res) => {
  weather(res);
});
//app.use('/*', handler.createUserSession, handler.navToLink);

// app.use('/logout', handler.logOut);

module.exports = app;