//required dependency
var distance = require('google-distance-matrix');
//key declaration
distance.key('AIzaSyC1pe5GNKjlqzxYo2FpnxVtubncnA29-Ns');
//grabs current time
distance.departure_time(Date.now());
//these will be used to set location for home and work can take it lat and long instead of address
var origins = ['16 Jessie St San Francisco CA 94105'];
var destinations = ['565 3rd Ave San Francisco'];

//the get request for the data

module.exports = (origins, destinations, cb) => {
  distance.matrix(origins, destinations, function (err, distances) {
    if (err) {
      cb (err, null);
    } else {
      time = distances.rows[0].elements[0].duration_in_traffic.text;
      cb (null, time);
    }
  });
}