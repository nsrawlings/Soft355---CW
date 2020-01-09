var app = require('express')();
var express = require('express');
var mongoose = require("mongoose");
var http = require('http').createServer(app);
var io = require('socket.io')(http);

//const db = require("./server/db")

var uri = 'mongodb+srv://nickRawlingsAd:Arya6!Wyche@clustercw-bpzdu.mongodb.net/soft355CWdb?retryWrites=true&w=majority';

const mongodbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect(uri, {useNewUrlParser: true});

var GameSchema = new mongoose.Schema({
    GameName : String, Turn : String, Moves : [String]
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

app.get('/tests.js', function(req, res){
    res.sendFile(__dirname + '/tests.js');
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

        socket.in("room-"+roomno).broadcast.emit('sendMove', message)
    })

    socket.on('setTeam', function (move) {
      console.log(socket.id +': ' + move.msg);

      var message = {from: socket.id,
          msg: move.msg
      }

      socket.in("room-"+roomno).emit('setTeam', message)
    })

    socket.on('refusedTeam', function (refused) {

      var message = {from: socket.id,
          msg: refused.msg
      }

      socket.in("room-"+roomno).emit('refusedReturn', message)
    })

    socket.on('victory', function (victory) {

      var message = {from: socket.id,
          msg: victory.msg
      }

      io.in("room-"+roomno).emit('victoryReturn', message)
    })

    socket.on('saveMoves', function (saveMoves) {
        console.log(saveMoves.team);
        console.log(saveMoves.fen);
        console.log(saveMoves.name);

        Game.findOne({"GameName":saveMoves.name}).then(function(game)
        {
          console.log(game);
          if(game == null)
          {
            // Create and save an instance of Moves
            var newGame = new Game({GameName: saveMoves.name, Turn: saveMoves.team,
              Moves: saveMoves.fen});
              newGame.save(function(err) {
              console.log("Saved Game");
              var message = {from: socket.id,
                msg: 'Save Complete',
              }
              io.in("room-"+roomno).emit('saveSucessful', message)
              });
          }
          else
          {
            if(game.GameName = saveMoves.name)
            {
              var message = {from: socket.id,
                msg: 'Name Taken',
              }
              console.log("Name Taken");
  
              io.in("room-"+roomno).emit('saveTaken', message)
            }
          }
        })  
      })

    socket.on('loadMoves', function (loadMoves) {
      console.log(loadMoves.name);
      Game.findOne({"GameName":loadMoves.name}).then(function(game){
        if(game == null)
        {
          var message = {from: socket.id,
            msg: 'No Save Game'
          }

          io.in("room-"+roomno).emit('noSaveGame', message)
        }
        else
        {
          var message = {from: socket.id,
            name: game.GameName,
            moves: game.Moves,
            turn: game.Turn
          }
          io.in("room-"+roomno).emit('loadMoves1', message)
        }
      })
    })
  });

  

http.listen(3000, function(){
    // Connect to Mongoose.
    mongoose.connect(uri, mongodbOptions).then((soft355CWdb) => {
        console.log("Connected to DB");
    });

    console.log('listening on *:3000');
});