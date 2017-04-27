var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var app = express();

app.use(cookieParser());
app.use(session({secret:'NOT TELLING', resave:false, saveUninitialized:false}));

function checkSession(req, res){
  if (req.session.user){
    next();
  } else {
    var err = new Error('Please enter your home and work zip code to proceed')
    console.log(err);
  }
}



module.exports = {checkSession:checkSession};