/**
 * Created by Jennykuma on 2018-02-20.
 */
let socket;
let username;

$(document).ready(onLoad());

function onLoad() {
    console.log("hello");
    socket = io();

    $('form').submit(function () {
        socket.emit('chat message', $('#user-msg').val());
        $('#user-msg').val('');
        return false;
    });

    socket.on('connect', function () {
        socket.emit('new user');
    });

    socket.on('new user', function (username) {
        $('#user-name').text("* You are " + username);
        $('#user-list').append($('<li>').text(username));
    });

    socket.on('new userlist', function (usersList) {
        $('#user-list').text("");
        for (let i = 0; i < usersList.length; i++) {
            $('#user-list').append($('<li>').text(usersList[i].nickname));
        }
    });

    socket.on('announce', function (username) {
        $('#chat-messages').append($('<li>').text(username + " has connected"));
    });

    socket.on('delete user', function (oldUsername) {
        $('#chat-messages').append($('<li>').text(oldUsername + " has disconnected"));
    });

    socket.on('chat message', function (timing, username, msg) {
        $('#chat-messages').append($('<li>').text(timing + " - " + username + " : " + msg)); // include the msg on the page
    });

    socket.on('bold chat message', function (timing, username, msg) {
        $('#chat-messages').append($('<li>').html(timing + " - " + '<b>' + username + " : " + msg + '</b>')); // include the msg on the page
    });

}