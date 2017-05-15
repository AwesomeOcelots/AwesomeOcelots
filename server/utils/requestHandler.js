var sessionChecker = require('../middleware/sessionChecker');
var db = require('../middleware/dbHandlers');
var session = require('express-session');
var yelpSearch = require('../middleware/lunchSuggestion.js');


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
