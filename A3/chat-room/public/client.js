/**
 * Created by Jennykuma on 2018-02-20.
 */
let socket;
let username;

$(document).ready(onLoad());

function onLoad() {
    console.log("hello");
    socket = io();

    $('form').submit(function() {
       socket.emit('chat message', $('#user-msg').val());
       $('#user-msg').val('');
       return false;
    });

    socket.on('connect', function(){
       socket.emit('new user');
    });

    socket.on('new user', function(username){
        $('#chat-messages').append($('<li>').text("You are " + username));
        $('#user-list').append($('<li>').text(username));
        console.log("printed");
    });

    socket.on('chat message', function(timing, msg) {
        $('#chat-messages').append($('<li>').text(timing + " " + msg)); // include the msg on the page
    });

/*
    // Run msg_sent function when enter key pressed
    $("#user-msg").keypress(function(event) {
        if (event.keyCode === 13)
            msg_sent();
    });
    console.log($('#user-msg').val())*/
}

/*
function msg_sent() {
    let time = new Date();
    //let timeString = time.getHours() + ': ' + time.getMinutes()
    let timeString = time.toLocaleTimeString(navigator.language, {hour: '2-digit', minute: '2-digit'}).toString();
    console.log("msg_sent");
    $('form').submit(function() {
        socket.emit('chat message', $('#user-msg').val());
        $('#user-msg').val('');
        return false;
    });
    socket.on('chat message', function(msg){
        console.log(timeString)
        $('#chat-messages').append($('<li>').text(timeString + " " + msg)); // include the msg on the page
        console.log('HELLO   ' + msg)
    });
}*/