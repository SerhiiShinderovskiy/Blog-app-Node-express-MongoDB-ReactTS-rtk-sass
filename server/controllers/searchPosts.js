const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.post('/posts/search', async (req, res) => {
    try {
        const searchTerm = req.body.searchTerm;
        if (typeof searchTerm !== 'string' || !searchTerm || searchTerm.trim() === "") {
            return res.status(400).json({ message: "Search term cannot be empty" });
        }
        const regex = new RegExp(searchTerm, 'i');
        const searchNoSpecialChar = searchTerm.replace(/[^a-zA-Z0-9]/g, "")
        const data = await Post.find({
            $or: [
                {title: { $regex: new RegExp(searchNoSpecialChar, 'i') }},
                {body: {$regex: new RegExp(searchNoSpecialChar, 'i') }}
            ]
        })
        res.json( data );
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Server Error"})
    }
})

module.exports = router;