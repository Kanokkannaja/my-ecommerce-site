var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end('{ "contactSubject": ["General Enquery","classes","Schedules","Instructor","Pricess","Other" ] }');
}).listen(5000);