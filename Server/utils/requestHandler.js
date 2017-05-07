
var sessionChecker = require('./middleware/sessionChecker');



module.exports.createUserSession = function(req, res){
  var userName = req.body.name;
  var homeDetails = {homeAddress: req.body.homeAddress, homeZip: req.body.homeZip};
  var workDetails = {workZip: req.body.workZip};

  var userHomeAddress = homeDetails.homeAddress;
  var userHomeZip = homeDetails.homeZip;
  
  var userWorkZip = workDetails.workZip;

  if (userName === ''){
    res.send('Please enter your name to continue to your customized homepage');
  }
  if (userHomeAddress === '' || userHomeZip === ''){
    res.send('Please enter your home address and zip code to continue to your customized homepage');
  }
  if (userWorkZip === ''){
    res.send('Please enter your work zip code to continue to your customized homepage');
  }
  else {
    return sessionChecker.createSession(req, res, user);
  }
}