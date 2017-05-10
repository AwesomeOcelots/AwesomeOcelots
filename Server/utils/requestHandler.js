var sessionChecker = require('../middleware/sessionChecker');
var db = require('../middleware/dbHandlers');
// var cityInfo = require('../middleware/cityinfo');
// var traffic = require('../middleware/traffictime');
// var weather = require('../middleware/weather');


module.exports.createUserSession = function(req, res){
  var userName = req.body.name;
  var homeDetails = {homeAddress: req.body.homeAddress, homeZip: req.body.homeZip};
  var workDetails = {workZip: req.body.workZip};

  var userHomeAddress = homeDetails.homeAddress;
  var userHomeZip = homeDetails.homeZip;
  
  var userWorkZip = workDetails.workZip;

  var user = {userName, homeDetails, workDetails};

  if (userName === ''){
    res.send('Please enter your name to continue to your customized homepage');
  }
  if (userHomeAddress === '' || userHomeZip === ''){
    res.send('Please enter your home address and zip code to continue to your customized homepage');
  }
  if (userWorkZip === ''){
    res.send('Please enter your work zip code to continue to your customized homepage');
  }
  else {
    res.redirect('/')
    console.log('SESSION CREATED', user)
    return sessionChecker.createSession(req, res, user);
  }
}

module.exports.navToLink = function(req, res){
  res.redirect('/');
}

module.exports.logOut = function(req, res){
  req.session.destroy(function(){
    res.redirect('/');
  });
}

module.exports.createUser = function(req, res) {
  console.log('REQ.BODY=====>', req.body)
  var homeStreet = req.body.home.street
  var homeCity = req.body.home.city
  var homeZip = req.body.home.zip
  var workStreet = req.body.work.street
  var workCity = req.body.work.city
  var workZip = req.body.work.zip
  db.createUser(homeStreet, homeCity, homeZip, workStreet, workCity, workZip, function(err, data) {
    if (err) {
      res.send(501, err);
    } else {
      res.send(200, data);
    }
  });
}
