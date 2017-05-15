var geocode = require('./geocode.js');

//required dependency
var DarkSky = require('forecast.io');
//API key
var key = '1028df8f37a758c1f061c7f1fcf81952';
//options object needed for the wrapper library to work
module.exports= (address, cb) => {
  geocode(address, (err, coordinates) => {
    if (err) {
      console.log(err);
    } else {
      var options = {
        APIKey: key,
        timeout: 1000
      };
      darksky = new DarkSky(options);
      darksky.getAtTime(coordinates.lat, coordinates.lng, Date.now, function (err, response, data) {
        if (err) {
          cb(err, null);
        } else {
          data = JSON.parse(JSON.stringify(data.currently));
          cb(null, data);
        }
      });
    }
  });
}