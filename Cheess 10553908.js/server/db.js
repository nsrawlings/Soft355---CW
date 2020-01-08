var schemas = require("./schema");
const mongoose = require('mongoose');

var GameSchema = new mongoose.Schema({
    Turn : String, Moves : [String]
  });
  
var game = mongoose.model("Game", GameSchema);

async function saveGame(moves) {
    // Create and save an instance of Moves
    var newGame = new game({
        Turn: "b",
        Moves: moves
    });
    newGame.save(function (err) {
        console.log("Saved student");
    });
}

module.exports.saveGame = saveGame;
