const config = require('../../config.js');
const yelp = require('yelp-fusion');

module.exports = function(req, res) {
  console.log('Term is ==========>', req.params.term)
  console.log('location is =========>', req.params.location)
  const id = config.yelpId;
  const sec = config.yelpSecret;
  
  const searchRequest = {
    term: req.params.term,
    location: req.params.location
  }
  
  return yelp.accessToken(id, sec)
    .then(response => {
      const client = yelp.client(response.jsonBody.access_token)
       return client.search(searchRequest)
    }).then((search) => {
      console.log(search.jsonBody.businesses[0])
      return search.jsonBody.businesses[0]
    }).then((data) => {
      res.status(200).send(data);
    }).catch(err => {
      res.status(404).send(err);
    })
}
