// Express initializes app to be a function handler that you can supply to an HTTP server (as seen in line 3).
let express = require('express');
let app = express();
//var app = require('express')(); // express is a library
let http = require('http').Server(app); // http is a library
let io = require('socket.io')(http); // new instance of io by passing http (http server) obj
let path = require("path");

app.use(express.static(path.join(__dirname, "public")));

// We define a route handler / that gets called when we hit our website home.
app.get('/', function(req, res){
    res.sendFile(__dirname + '/public' + '/index.html');
});

// Listen for on the connection event for incoming sockets, log to console
io.on('connection', function(socket){
    console.log('a user connected');

    // User disconnects
    socket.on('disconnect', function(){
        console.log('a user disconnected');
    });

    // Chat message sent
    socket.on('chat message', function(msg){ // print chat msg received in console
        console.log('message: ' + msg);
    });
    socket.on('chat message', function(msg){
        io.emit('chat message', msg); // send msg to everyone on the server
    });
});

// We make the http server listen on port 3000.
http.listen(3000, function(){
    console.log('listening on *:3000');
});