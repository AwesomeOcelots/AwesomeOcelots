var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyAMi3q7de6y3zroMe84qvLBcZIUtXH9dB0'
});

module.exports = (address, cb)=>{
  googleMapsClient.geocode({
  address: address,
}, function(err, response) {
  if (err) {
    cb(err,null);
  }else{
    cb(null, response.json.results[0].geometry.location)
  }
});
}
