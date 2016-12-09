var http = require('http');
var url = require('url');

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
    var queryData = url.parse(request.url, true).query;
    var firstname =  queryData.fn;
    var lastname =  queryData.ln;

   if(request.method=='GET') 
   {
       if (firstname && lastname)
       {
           response.end('Hello '+firstname+' '+lastname+'. This was an awesome request with query arguments!');
       }
       else
        response.end('This was an awesome request, but unfortunately there are some missing query arguments'); 
   } else
   {       
        response.end('Wow, this was an awesome '+request.method+' request. But you were requestesd to make a GET request with query arguments!\n'); 
   }
   
}).listen(process.env.PORT);
