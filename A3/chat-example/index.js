// Express initializes app to be a function handler that you can supply to an HTTP server (as seen in line 3).
var app = require('express')(); // express is a library
var http = require('http').Server(app); // http is a library

// We define a route handler / that gets called when we hit our website home.
app.get('/', function(req, res){
    res.send('<h1>Hello world</h1>');
});

// We make the http server listen on port 3000.
http.listen(3000, function(){
    console.log('listening on *:3000');
});
