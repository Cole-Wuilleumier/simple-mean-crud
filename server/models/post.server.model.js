var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = Schema({
  id_: Number,  
  title: { type: String, required: true, unique: true },
  content: { type: String, required: true },

  userId: Number,
  subject: String,

  created_at: Date,
  updated_at: Date
}); 

// Pre-save functions go below
postSchema.pre('save', function(next) {

  var currentDate = new Date();
  // change the updated_at field to current date
  this.updated_at = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.created_at)
    this.created_at = currentDate;

  next();
});

    
var Post = mongoose.model('Post', postSchema);

// make this available to our users in our Node applications
module.exports = Post;