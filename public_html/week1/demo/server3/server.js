var http = require('http');
var url = require('url');

http.createServer(function (request, response) {

    /* Will give you the path name with no parameters */
    var pathName = url.parse(request.url).pathname.substring(1);

   /* Send the HTTP header
    * HTTP Status: 200 : OK
    * Content Type: text/html
    */

    if( pathName === 'todo'){
      response.writeHead(200, {'Content-Type': 'text/plain'});
      //response.write('<!DOCTYPE html><html><body><div>Request for ' + pathName + ' received</div></body></html>');
      response.end('todo');
    } else {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write('<!DOCTYPE html><html><body><div>Request for ' + pathName + ' received</div></body></html>');
      response.end();
   }
}).listen(3000);

/* Console will print the message */
console.log('Server running at http://localhost:3000/');
