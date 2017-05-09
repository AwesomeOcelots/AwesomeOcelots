var db = require('../db/config.js');

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

