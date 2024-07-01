const mongoose = require('mongoose');
// const { create } = require('./Event.model');
const Schema = mongoose.Schema;
const postsSchema = new Schema({
  
  city: { type: String, required: false},
  title: { type: String, required: false },
  content: { type: String, required: false },
  postAuthor: { type: String, required: false},
  image : { type : String, contentType: String },
  contactInfo: { type: String, required: false },
 createdAt: { type: Date, default: Date.now, required: false },
});
const Posts = mongoose.model('Posts', postsSchema);
module.exports = Posts;