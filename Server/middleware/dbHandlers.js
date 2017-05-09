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

// createUser('a street', 'Los Angeles', '90013', 'a street', 'Los Angeles', '90013', (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });