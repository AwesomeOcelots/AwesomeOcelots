var db = require('../db/config.js');

// We might not want to use this (alone) because it doesn't tie in zip codes
// Img uri needs to be added manually
var createCity = function(cityName, cb) {
  var sql = "INSERT cities (name) VALUES (?);"
  db.query(sql, [cityName], function(err, results, fields) {
    if (err) {
      cb(err, false);
    } else {
      cb(null, true);
    }
  });
};

var createUser = function(homeStreet, homeCity, homeZip, workStreet, workCity, workZip, cb) {
  var sql = "INSERT users (home_street, home_city, home_zip, work_street, work_city, work_zip, home_city_id) VALUES (?, ?, ?, ?, ?, ?, (SELECT id FROM zips WHERE(zip = ?) LIMIT 1));"
  db.query(sql, [homeStreet, homeCity, homeZip, workStreet, workCity, workZip, homeZip], function(err, results, fields) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, results.insertId);
    }
  });
};
// example results (stringified):
// "12345"

var getUserInfo = function(userId, cb) {
  var sql = "SELECT * FROM users WHERE(id = ?) LIMIT 1;"
  db.query(sql, [userId], function(err, results, fields) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};
// [{"id":1,"home_street":"market street","home_city":"San Francisco","home_zip":"94102","work_street":"work street","work_city":"work city","work_zip":"work zip","home_city_id":1}]

var getUserLikes = function(userId, cb) {
  var sql = "SELECT name, cities.id FROM cities, likes WHERE cities.id = likes.city_id AND likes.user_id = ?;"
  db.query(sql, [userId], function(err, results, fields) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};
// [{"name":"Los Angeles","id":2},{"name":"New York City","id":3}]

var createLike = function(userId, cityName, cb) {
  var sql = "INSERT likes (user_id, city_id) VALUES (?, (SELECT id FROM cities WHERE name = ?));"
  // We will probably have to alter this to take a city ID directly, as names aren't unique
  db.query(sql, [userId, cityName], function(err, results, fields) {
    if (err) {
      cb(err, false);
    } else {
      cb(null, true);
    }
  });
};

// Will need to swap to ID from city name eventually
var getCityLikeCount = function(cityName, cb) {
  var sql = "SELECT COUNT(likes.id) AS count FROM likes, cities WHERE city_id = cities.id AND name = ?;"
  db.query(sql, [cityName], function(err, results, fields) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, results[0].count);
    }
  });
};
// 5

// Will need to swap to ID from city name eventually
var getCityLikeCountList = function(cb) {
  var sql = "SELECT name, COUNT(likes.id) AS count FROM likes, cities WHERE city_id = cities.id GROUP BY name;"
  db.query(sql, function(err, results, fields) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};
// [{"name":"London","count":3},{"name":"Los Angeles","count":10},{"name":"New York City","count":5},{"name":"San Franscisco","count":4}]

var getMostLiked = function(cb) {
  var sql = "SELECT name, COUNT(likes.id) AS count FROM likes, cities WHERE city_id = cities.id GROUP BY name ORDER BY count DESC LIMIT 1;"
  db.query(sql, function(err, results, fields) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};
// [{"name":"Los Angeles","count":10}]

