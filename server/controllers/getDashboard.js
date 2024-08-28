const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const authMiddleware = require('../middleware/authMiddleware');

// Admin dashboard
router.get('/admin/dashboard', authMiddleware, async (req, res) => {
    const page = parseInt(req.query.page);
    const limitOnPage = parseInt(req.query.limitOnPage);
    const startIndex = (page - 1) * limitOnPage;
    const endIndex = page * limitOnPage;

    try {
        const posts = await Post.find().sort({ createdAt: -1 });
        const paginatedProducts = posts.slice(startIndex, endIndex);
        const totalPages = Math.ceil(posts.length / limitOnPage);
        res.json({ posts: paginatedProducts, totalPages });
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Server Error"})
    }
})

module.exports = router;