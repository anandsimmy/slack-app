var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3002, function (){
    console.log('hi this is server')
});

app.get('/', function (req, res) {
  res.send('Hello World');
});

io.on('connection', function (socket) {
      console.log('a user connected');
      socket.on('private message', function (msg) {
        console.log(msg);
      });
    });