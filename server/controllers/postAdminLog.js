const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

// Post method
// Admin - login
router.post('/admin/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        const options = {
            expiresIn: '1h',
        };
        if (!user) {
            res.status(401).json({ message: 'Invalid credentials' });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) {
            res.status(401).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ userId: user._id, username: username }, jwtSecret, options);
        res.cookie('token', token, { httpOnly: false, path: '/' });
        res.status(200).json({ message: "Login was succesessful" });
        console.log("Token set on server:", token);
    } catch (error) {
        console.log("Some error with admin:", error);
    }
})

module.exports = router;