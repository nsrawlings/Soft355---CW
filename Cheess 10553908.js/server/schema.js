const mongoose = require('mongoose');

var GameSchema = new mongoose.Schema({
  Turn : String, Moves : [String]
});

var game = mongoose.model("Game", GameSchema);

module.exports.game = game; 