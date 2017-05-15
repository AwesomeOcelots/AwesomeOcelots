var sessionChecker = require('../middleware/sessionChecker');
var db = require('../middleware/dbHandlers');
var session = require('express-session');
var yelpSearch = require('../middleware/lunchSuggestion.js');

// var cityInfo = require('../middleware/cityinfo');
// var traffic = require('../middleware/traffictime');
// var weather = require('../middleware/weather');


// module.exports.createUserSession = function(req, res){
//   var userName = req.body.name;
//   var homeDetails = {homeAddress: req.body.homeAddress, homeZip: req.body.homeZip};
//   var workDetails = {workZip: req.body.workZip};

//   var userHomeAddress = homeDetails.homeAddress;
//   var userHomeZip = homeDetails.homeZip;
  
//   var userWorkZip = workDetails.workZip;

//   var user = {userName, homeDetails, workDetails};

//   if (userName === ''){
//     res.send('Please enter your name to continue to your customized homepage');
//   }
//   if (userHomeAddress === '' || userHomeZip === ''){
//     res.send('Please enter your home address and zip code to continue to your customized homepage');
//   }
//   if (userWorkZip === ''){
//     res.send('Please enter your work zip code to continue to your customized homepage');
//   }
//   else {
//     res.redirect('/')
//     console.log('SESSION CREATED', user)
//     return sessionChecker.createSession(req, res, user);
//   }
// }

// module.exports.navToLink = function(req, res){
//   res.redirect('/');
// }

// module.exports.logOut = function(req, res){
//   req.session.destroy(function(){
//     res.redirect('/');
//   });
// }

module.exports.checkSession = function(req, res) {
  console.log('GETTING HERE????????', req.sessionID);
  if (req.session.user) {
    console.log('SESSION ID======>', req.sessionID)
    db.getUserInfo(req.session.user.id, function(err, data) {
      if (err) {
        res.send(404, err);
      } else{
        console.log('DATA IS ======>', data[0].id)
        console.log(req.session.user.userName)
        var thisUser = {
          user: req.session.user.userName,
          userId: data[0].id,
          home: {
            street: data[0].home_street,
            city: data[0].home_city,
            zip: data[0].home_zip
          },
          work: {
            street: data[0].work_street,
            city: data[0].work_city,
            zip: data[0].work_zip
          },
          otherCity: '',
          weatherHere: '',
          weatherThere: '',
          trafficHere: '',
          trafficThere: '',
          session: true
        };
        console.log('USER INFO=========>', thisUser)
        res.send(200, thisUser);
      }
    });
  } else {
    var noUser = {
      user: '',
      userId: '',
      home: {},
      work: {},
      otherCity: '',
      weatherHere: '',
      weatherThere: '',
      trafficHere: '',
      trafficThere: '',
      session: false
    }
    res.send(200, noUser);
  }
}

module.exports.createUser = function(req, res) {
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
      req.session.user = {id: data, userName: req.body.userName}
      res.send(200, data);
    }
  });
}

module.exports.yelpSearch = function(req, res) {
  yelpSearch(req, res)
}
