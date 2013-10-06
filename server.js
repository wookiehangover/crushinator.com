var http = require('http');
var ecstatic = require('ecstatic');

http.createServer(
  ecstatic({ root: __dirname + '/public' })
).listen(process.env.PORT || 8080);

console.log('Listening on :'+ (process.env.PORT || 8080) );