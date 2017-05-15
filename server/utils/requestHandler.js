var db = require('../middleware/dbHandlers');
var session = require('express-session');
var yelpSearch = require('../middleware/lunchSuggestion.js');
var trafficTime = require('../middleware/traffictime.js');
var getWeather = require('../middleware/weather.js');

module.exports.checkSession = function(req, res) {
  if (req.session.user) {
    db.getUserInfo(req.session.user.id, function(err, data) {
      if (err) {
        res.send(404, err);
      } else{
        getFeaturedCity((err, FCdata) => {
          if (err) {
            console.log(err);
          } else {
            var featuredName = FCdata.name;

            var origin = data[0].home_street + ' ' + data[0].home_city + ' ' + data[0].home_zip;
            var destination = data[0].work_street + ' ' + data[0].work_city + ' ' + data[0].work_zip;
            trafficTime(origin, destination, (err, homeTrafficData) => {
              if (err) {
                console.log(err);
              } else {
                var homeTrafficTime = homeTrafficData;

                getWeather(origin, (err, homeWeatherData) => {
                  if (err) {
                    console.log(err);
                  } else {
                    getWeather(featuredName, (err, featuredWeatherData) => {
                      if (err) {
                        console.log(err);
                      } else {
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
                          otherCity: featuredName,
                          weatherHere: homeWeatherData,
                          weatherThere: featuredWeatherData,
                          trafficHere: homeTrafficTime,
                          trafficThere: '',
                          session: true
                        };
                        res.send(200, thisUser);
                      }
                    });
                  }
                });
              }
            });
          }
        });
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

module.exports.createLike = function(req, res) {
  db.createLike(req.body.userId, req.body.otherCity, function(err, data) {
    if (err) {
      console.log('Error: ', err);
      res.send(501, err);
    } else {
      console.log('like posted to the database');
      res.send(200, data);
    }
  })
}
