app.get('/yelp', function(req, res) {
 'use strict';
 
  const yelp = require('yelp-fusion');
  const id = '';
  const sec = '';
  
  const searchRequest = {
    term: req.body.term,
    location: req.body.location
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
    })

});
