import React from 'react';
import $ from 'jquery';

export const yelpSearch = (searchObj, cb) => {
  $.ajax({
    method: 'GET',
    url: '127.0.0.1:3002/yelpsearch',
    data: JSON.stringify(searchObj),
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

export const weatherSearch = (serachObj, cb) => {
  $.ajax({
    method: 'GET',
    url: '???',
    data: JSON.stringify(searchObj),
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

export const citiSearch = (searchObj, cb) => {
  $.ajax({
    method: 'GET',
    url: '???',
    data: JSON.stringify(searchObj),
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

export const trafficSearch = (searchObj, cb) => {
  $.ajax({
    method: 'GET',
    url: '???',
    data: JSON.stringify(searchObj),
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

