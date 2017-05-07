var PORT = process.env.port || 3002;
var app = require('./server-config.js').listen(PORT)
console.log('IT LIVES!!! @', PORT);
