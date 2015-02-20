var http = require('http');
var server = http.createServer(function(req, res) {
	//hello world server
	var body = 'Hello World';
	res.setHeader('Content-Length', body.length);
	res.setHeader('Content-Type', 'text/plain');
	res.end(body);
	//res.write('Hello World');
	//res.end();
});
server.listen(9000, function(){
	console.log('listening on port 9000');
});