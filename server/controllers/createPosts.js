const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/add-new-post', authMiddleware, async (req, res) => {
    try {
        const newPost = new Post({
            title: req.body.title,
            body: req.body.body
        });
        const post = await newPost.save();
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({message: "Post create error", error: error.message});
    }
})

module.exports = router;