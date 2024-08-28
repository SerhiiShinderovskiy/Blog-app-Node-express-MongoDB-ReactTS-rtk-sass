const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const mongoose = require('mongoose');
const authMiddleware = require('../middleware/authMiddleware');

router.put('/edit-post/:id', authMiddleware, async (req, res) => {
    const { id } = req.params;
    console.log('Received ID:', id);
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid ID format" });
    }
    try {
        const data = await Post.findByIdAndUpdate( id, {
            title: req.body.title,
            body: req.body.body,
            updatedAt: Date.now()
        });
        if (!data) {
            return res.status(404).json({ message: "Post not found" });
        }
        res.json( data );
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Server Error"})
    }
})

module.exports = router;