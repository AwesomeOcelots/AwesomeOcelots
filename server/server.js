var PORT = process.env.port || 3002;
var app = require('./server-config.js').listen(PORT)
console.log('Server now running at', PORT);
