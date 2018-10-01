var http = require("http");
var fs = require("fs");
var mime = require('mime');
var url = require('url');
function serve(request,response){
    console.trace();
    response.setHeader("name", 'jerry');
    var urlObj = url.parse(request.url, true);

    if(urlObj.path == '/'){
        response.setHeader("Content-Type", "text/html;charset=utf-8");
        fs.readFile('hello.html', function (error,text) {
            response.write(text);
            response.end();
        });
    }else if(urlObj.path == '/clock'){
        setInterval(function () {
            response.write(new Date().toDateString());
        },1000);
    }

    else if(urlObj.path != '/favicon.ico'){
        static(urlObj.path, response);
    }





}

function static (url,resposne) {
    resposne.setHeader('content-type', mime.getType(url) + ';charset=utf-8');
    fs.readFile(url.slice(1), function (error,text) {
        resposne.write(text);
        resposne.end();
    });
}
var server = http.createServer(serve);
server.listen(80,'localhost');


