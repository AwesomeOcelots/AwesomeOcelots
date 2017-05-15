//required dependency
var DarkSky = require('forecast.io');
//API key
var key = '1028df8f37a758c1f061c7f1fcf81952';
//options object needed for the wrapper library to work
module.exports= (res) => {
  var options = {
    APIKey: key,
    timeout: 1000
  },
  darksky = new DarkSky(options);
  darksky.getAtTime(37.789935,-122.398961, Date.now, function (err, response, data) {
  if (err) throw err;
  data = JSON.parse(JSON.stringify(data.currently));
  res.send(data);
  })
}