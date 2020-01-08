// getting-started.js
var mongoose = require('mongoose');
var uri = 'mongodb+srv://nickRawlingsAd:Arya6!Wyche@clustercw-bpzdu.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(uri, {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});