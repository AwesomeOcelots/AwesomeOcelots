// const config = require('../utils/config.js');
// const yelp = require('yelp-fusion');

// module.exports = function(searchTerm, searchLocation) {
//  'use strict';
 
//   const id = config.yelpId;
//   const sec = config.yelpSecret;
  
//   const searchRequest = {
//     term: searchTerm,
//     location: searchLocation
//   }
//   console.log('SearchREquset is========>', searchRequest);

//   return yelp.accessToken(id, sec)
//     .then(response => {
//       const client = yelp.client(response.jsonBody.access_token)
//        return client.search(searchRequest)
//     }).then((search) => {
//       console.log(search.jsonBody.businesses[0])
//       return search.jsonBody.businesses[0]
//     }).then(search => {
//       res.send
//     }).catch(err => {
//       console.log(err)
//     })
// };
