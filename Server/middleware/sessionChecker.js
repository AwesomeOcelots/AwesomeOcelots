var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var request = require('request');

var handler = require('../utils/requestHandler')


var app = express();

app.use(cookieParser());
app.use(session({secret:'NOT TELLING', resave:false, saveUninitialized:true}));


var isLoggedIn = function(req, res){
  return req.session ? !!req.session.user : false
}

module.exports.checkUser = function(req, res, next){
  if (!isLoggedIn(req)){
    console.log('not logged in because no session exists...');
    console.log('creating session now...');
    handler.createUserSession(req, res);

    //at this point, the next function needs to be called.
    //this needs to happen AFTER a session has been created
  } else {
    console.log('logged in, calling next function...');
    next();
  }
}