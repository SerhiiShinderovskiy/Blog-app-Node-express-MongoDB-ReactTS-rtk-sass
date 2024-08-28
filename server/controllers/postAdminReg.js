const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

// Post method
// Admin - register
router.post('/admin/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        try {
            const user = await User.create({ username, password: hashedPassword });
            res.status(201).json({ message: 'User created', user });
        } catch (error) {
            if (error.code === 11000) {
                res.status(409).json({ message: 'User already in use' });
            }
            res.status(500).json({ message: 'Internal server error' });
        }
    } catch (error) {
        console.log("Some error with admin:", error);
    }
})

module.exports = router;