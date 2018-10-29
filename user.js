const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
const BlogPost = new Schema({
  title: String,
  body: String
});

module.exports = mongoose.model('BlogPost', BlogPost);