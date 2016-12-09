var http = require('http');
var port = process.env.port | 1337;

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   if(request.method=='POST') {
       // Send the response body as "Hello Cloud"
        response.end('Wow, this was an awesome POST request!\n'); 
   }
   else
   {
        // Send the response body as "Hello Cloud"
        response.end('Hello Cloud\n'); 
   } 
}).listen(port);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
