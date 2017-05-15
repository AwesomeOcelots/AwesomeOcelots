//required dependency
var wikipedia = require("node-wikipedia");

//this is how we pull data (the intro paragraph of interest)
  module.exports = (res) => {
    wikipedia.page.data("San Diego", {content: true, format: JSON }, function (response) {
    var intro = response.text['*'].match("<p><b>(.*?)</p>")[1];
    intro = intro.replace(/<(?:.|\n)*?>/gm, '');
    //intro = intro.replace(/ *\([^)]*\) */g, "");
    intro = intro.replace(/ *\[[^\]]*]/g, '');
    res.end(intro);
  });
  }