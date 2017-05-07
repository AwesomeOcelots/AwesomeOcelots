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

