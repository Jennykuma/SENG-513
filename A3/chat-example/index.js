// Express initializes app to be a function handler that you can supply to an HTTP server (as seen in line 3).
var app = require('express')(); // express is a library
var http = require('http').Server(app); // http is a library
var io = require('socket.io')(http); // new instance of io by passing http (http server) obj

// We define a route handler / that gets called when we hit our website home.
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

// Listen for on the connection event for incoming sockets, log to console
io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('a user disconnected');
    });
    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
    });
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });
});

// We make the http server listen on port 3000.
http.listen(3000, function(){
    console.log('listening on *:3000');
});
