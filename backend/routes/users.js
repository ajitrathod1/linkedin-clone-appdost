import express from 'express';
import User from '../models/User.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Get profile (public)
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if(!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch(err){ res.status(500).json({ message: err.message }); }
});

// Update profile (owner)
router.put('/:id', auth, async (req, res) => {
  try {
    if(req.user.id !== req.params.id) return res.status(401).json({ message: 'Not authorized' });
    const user = await User.findById(req.params.id);
    if(!user) return res.status(404).json({ message: 'User not found' });
    user.name = req.body.name || user.name;
    user.bio = req.body.bio || user.bio;
    await user.save();
    res.json({ id: user._id, name: user.name, email: user.email, bio: user.bio });
  } catch(err){ res.status(500).json({ message: err.message }); }
});

export default router;
