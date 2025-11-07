import express from 'express';
import auth from '../middleware/auth.js';
import Comment from '../models/Comment.js';
import Post from '../models/Post.js';
import User from '../models/User.js';

const router = express.Router();

// Add comment
router.post('/:postId', auth, async (req, res) => {
  try {
    const { text } = req.body;
    if(!text) return res.status(400).json({ message: 'Text required' });
    const post = await Post.findById(req.params.postId);
    if(!post) return res.status(404).json({ message: 'Post not found' });
    const comment = await Comment.create({ post: post._id, user: req.user.id, text });
    const populated = await comment.populate('user','name');
    res.json(populated);
  } catch(err){ res.status(500).json({ message: err.message }); }
});

// Get comments for a post
router.get('/:postId', async (req, res) => {
  try {
    const comments = await Comment.find({ post: req.params.postId }).populate('user','name').sort({ createdAt: 1 });
    res.json(comments);
  } catch(err){ res.status(500).json({ message: err.message }); }
});

// Delete comment (owner)
router.delete('/:id', auth, async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if(!comment) return res.status(404).json({ message: 'Comment not found' });
    if(comment.user.toString() !== req.user.id) return res.status(401).json({ message: 'Not authorized' });
    await comment.remove();
    res.json({ message: 'Comment deleted' });
  } catch(err){ res.status(500).json({ message: err.message }); }
});

export default router;
