var http = require('http');
var url = 'http://lane-tilley.com';
var body = '<span>Redirecting to a <a href="' + url + '">'
var server = http.createServer(function(req, res) 
	//hello world server
	res.write('Hello World');
	res.end();
});
res.setHeader('Location', url);
res.setStatusCode('Content-Length', body.length);
res.setHeader('Content-Type', 'text/html');
res.end(body);
server.listen(9000, function(){
	console.log('listening on port 9000');
});