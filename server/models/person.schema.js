var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create the Schema
var dogSchema = new Schema({
  name: {type: String, required: true, unique: true},
  message: {type: String},
});

// export our model
module.exports = mongoose.model('Dog', dogSchema);
