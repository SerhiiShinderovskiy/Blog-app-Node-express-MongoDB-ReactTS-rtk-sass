const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

// Chek Login
const authMiddleware = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    try {
        const decoded = jwt.verify(token, jwtSecret);
        if (decoded.exp * 1000 < Date.now()) {
            return res.status(401).json({ message: 'Token expired' });
        }
        req.userId = decoded.userId;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Unauthorized' });
    }
}

module.exports = authMiddleware;