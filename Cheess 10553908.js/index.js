var app = require('express')();
var express = require('express');
var mongoose = require("mongoose");
var http = require('http').createServer(app);
var io = require('socket.io')(http);

var uri = 'mongodb+srv://nickRawlingsAd:Arya6!Wyche@clustercw-bpzdu.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(uri, {useNewUrlParser: true});

var GameSchema = new mongoose.Schema({
    Turn : String, Moves : [String]
  });

var Game = mongoose.model("Game", GameSchema);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/Main.html');
  });

app.get('/main.js', function(req, res){
    res.sendFile(__dirname + '/main.js');
  });

app.get('/customChess.js', function(req, res){
    res.sendFile(__dirname + '/customChess.js');
  });

app.get('/js/chessboard-1.0.0.js', function(req, res){
    res.sendFile(__dirname + '/js/chessboard-1.0.0.js');
  });
  
app.get('/css/chessboard-1.0.0.css', function(req, res){
    res.sendFile(__dirname + '/css/chessboard-1.0.0.css');
  });

  app.use('/img/chesspieces/wikipedia/', express.static(__dirname + '/img/chesspieces/wikipedia/'));

  var roomno = 1;

  io.sockets.on('connection', function(socket) 
  {
    if(io.nsps['/'].adapter.rooms["room-"+roomno] && io.nsps['/'].adapter.rooms["room-"+roomno].length > 1) roomno++;
    socket.join("room-"+roomno);
    console.log('socket connect ' + socket.id);

    //Send this event to everyone in the room.
    io.sockets.in("room-"+roomno).emit('connectToRoom', "You are in room no. "+roomno);

    socket.on('disconnect', function() {
        console.log('socket disconnect');
        socket.leave("room-"+roomno);
    })

    // when server receive a message, it will send to all client which connect to the server
    socket.on('move', function (move) {
        console.log(socket.id +': ' + move.msg);

        var message = {from: socket.id,
            msg: move.msg
        }

        socket.in("room-"+roomno).emit('sendMove', message)
    })

    socket.on('saveMoves', function (saveMoves) {
        console.log(saveMoves.msg);

        // Create and save an instance of Moves
        var newGame = new Game({Turn: "b",
        Moves: saveMoves.msg});
        newGame.save(function(err) {
            console.log("Saved student");
        });
    })
  });

http.listen(3000, function(){

    // Connect to Mongoose.
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log("Connected to DB");
    });

    console.log('listening on *:3000');
});