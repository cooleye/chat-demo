var express = require('express');
var app = express();
var http = require('http').Server(app);
var socket = require('socket.io');
var io = socket(http);
app.use(express.static('public'));
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(3000,'10.0.14.236' ,function(){
  console.log('listening on *:3000');
});
