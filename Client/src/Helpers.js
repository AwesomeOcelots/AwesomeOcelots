import React from 'react'
import $ from 'jquery'

export const yelpSearch = (searchObj, cb) => {
  $.ajax({
    method: 'GET',
    url: 'http://127.0.0.1:3002/api/yelp/' + searchObj.term + '/' + searchObj.location,
    dataType: 'json',
    contentType: 'application/json',
    success: (data) => {
      cb(data);
    },
    fail: () => {
      console.log('Error, data failed to load');
    }
  });
}

export const greener = (likeObj) => {
  $.ajax({
    method:'POST',
    url: 'http://127.0.0.1:3002/api/greener',
    dataType: 'json',
    contentType: 'application/json',
    data: JSON.stringify(likeObj),
    success: () => {
      console.log('Thank you for your input');
    },
    fail: (err) => {
      console.log('Failed to post ', err);
    }
  });
}

