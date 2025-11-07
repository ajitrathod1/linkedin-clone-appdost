const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  user: String,
  text: String,
  time: String
}, { _id: false });

const PostSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  name: String,
  email: String,
  text: { type: String, default: '' },
  image: { type: String, default: '' }, // base64 / dataURL
  video: { type: String, default: '' }, // base64 / dataURL
  likes: { type: Number, default: 0 },
  comments: { type: [CommentSchema], default: [] },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Post', PostSchema);
