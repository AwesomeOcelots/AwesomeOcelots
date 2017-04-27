var express = require('express');
var bodyParser = require('body-parser');
var Path = require('path');


var root = Path.join(__dirname, '../Client/dist');
var app = express();

var sessionChecker = require('./middleware/sessionChecker');


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


app.get('/signup', function(req, res){
  res.render('signup')
});

app.post('/signup', function(req, res){
  
  //var userId = (GET ID FROM DB)          TODO
  //get user id then...

  if (!req.body.homeZipCode || !req.body.workZipCode){
    res.status(400);
    res.send('Please enter your home and work zip code to proceed');
  } else {
    var newUser = {homeZipCode: req.body.homeZipCode, workZipCode: req.body.workZipCode}  //also include  'userId':userId
    res.session.user = newUser;
    res.redirect('/whateverWeNameOurMainHomePage')
  }
})

app.listen(PORT, () =>{
  console.log('IT LIVES!!! @', PORT);
})