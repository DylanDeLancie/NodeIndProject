// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var taskSchema = new Schema({
  task: String,
  day: String,
  time: Number
});

//attach schema to model
var Task = mongoose.model('Task', taskSchema);

// make this available to our users in our Node applications
module.exports = Task;
