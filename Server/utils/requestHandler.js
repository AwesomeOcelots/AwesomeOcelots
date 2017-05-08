var sessionChecker = require('../middleware/sessionChecker');
var db = require('../middleware/dbHandlers');
// var cityInfo = require('../middleware/cityinfo');
// var traffic = require('../middleware/traffictime');
// var weather = require('../middleware/weather');


module.exports.createUserSession = function(req, res){
  console.log(req.body, 'REQ FROM HANDLER');

  if (!req.body.name){
    console.log('Empty request. Redirect to /')
    res.redirect('/');
  } else {
    var userName = req.body.name;
    var homeDetails = {homeAddress: req.body.homeAddress, homeZip: req.body.homeZip};
    var workDetails = {workZip: req.body.workZip};

    var userSession = {};

    //If any fields are left empty
    if (userName === ''){
      res.send('Please enter your name to continue to your customized homepage');
    }
    if (homeDetails.homeAddress === '' || homeDetails.homeZip === ''){
      res.send('Please enter your home address and zip code to continue to your customized homepage');
    }
    if (workDetails.workZip === ''){
      res.send('Please enter your work zip code to continue to your customized homepage');
    }
    //Otherwise, create a new session from the user object
    else {
      // console.log('SESSION IS BEING CREATED FOR ', user, 'OBJECT');
      // console.log('');
      for (var detail in req.body){
        userSession[detail] = req.body[detail];
      }
      res.send(userSession);
    }
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

