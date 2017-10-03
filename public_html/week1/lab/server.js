

var http = require('http');
var url = require('url');
var fileSystem = require('fs');

http.createServer(function (request, response) {

    var pathName = url.parse(request.url).pathname;
    var fileName = pathName.substr(1); /* lets remove the "/" from the name */
    var urls = request.url;

    if ( fileName === 'index'){
      fileName = 'index.html';
    } if ( fileName === 'todo'){
      fileName = 'todo.json';
    } if (fileName === 'read-todo'){
        fileName = 'fetch.html';
    }
//    } else {
//        fileName = 'index.html';
//    }


    /* lets try to read the html page found */
    fileSystem.readFile(fileName , callback);

    function callback(err, data) {
        if (err) {
            console.error(err);
          //  console.log('error this is what you need ' + fileName.toString());
            /* Send the HTTP header
             * HTTP Status: 400 : NOT FOUND
             * Content Type: text/html
             */
            response.writeHead(400, {'Content-Type': 'text/html'});
            response.write('<!DOCTYPE html><html><body><div>Page Not Found</div></body></html>');            
        } else {
            /* Send the HTTP header
             * HTTP Status: 200 : OK
             * Content Type: text/html
             */
            
            //About me Section
            if ( fileName === 'index.html'){
                response.writeHead(200, {'Content-Type': 'text/html'});
                //response.write('<!DOCTYPE html><html><body><div>This is TYLER index page</div></body></html>');
                response.write(data.toString());
                response.end();
            //todo json file
            } if ( fileName === 'todo.json'){
                response.writeHead(200, {'Content-Type': 'application/json'});
                response.write(data.toString());
                response.end('todo');
            } if ( fileName === 'fetch.html'){
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(data.toString());
                response.end();
            }
            
        }

        /* the response is complete */
        response.end();
    }


}).listen(3000);

// Console will print the message
console.log('Server running at http://localhost:3000/index.html');
