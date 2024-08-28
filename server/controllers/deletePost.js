const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const mongoose = require('mongoose');
const authMiddleware = require('../middleware/authMiddleware');

router.delete('/delete-post/:id', authMiddleware, async (req, res) => {
    const { id } = req.params;
    console.log('Received ID:', id);
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid ID format" });
    }
    try {
        const result = await Post.deleteOne({ _id: id });
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "Post not found or already deleted" });
        }
        res.status(200).json({ message: "Post deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Server Error", error: error.message });
    }
})

module.exports = router;