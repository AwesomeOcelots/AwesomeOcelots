var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var request = require('request');

var app = express();

app.use(cookieParser());
app.use(session({secret:'NOT TELLING', resave:false, saveUninitialized:false}));


module.exports.isLoggedIn = function(req, res){
  return req.session ? !!req.session.user : false
}

module.exports.checkUser = function(req, res, next){
  if (!isLoggedIn(req)){
    res.redirect('/');
  } else {
    next();
  }
}

module.exports.createSession = function(req, res, newUser){
  return req.session.regenerate(function(){
    req.session.user = newUser;
    res.redirect('/');
  });
}
