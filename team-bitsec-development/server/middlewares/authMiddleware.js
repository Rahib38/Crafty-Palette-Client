const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next) => {
    try {
        // Get the token from Authorization header or cookies
        const authHeader = req.headers['authorization'] || req.headers['Authorization'];
        const token = authHeader?.startsWith('Bearer ') ? authHeader.split(' ')[1] : req.cookies?.token;

        if (!token) {
            return res.status(401).json({ success: false, error: 'Missing or invalid token' });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.userId = decoded.userId;

        // Optionally, check user roles
        // if (decoded.role !== 'admin') {
        //     return res.status(403).json({ success: false, error: 'Forbidden: Insufficient permissions' });
        // }

        next();
    } catch (err) {
        console.error('JWT Error:', err);

        if (err.name === 'TokenExpiredError') {
            return res.status(401).json({ success: false, error: 'Token expired' });
        }
        if (err.name === 'JsonWebTokenError') {
            return res.status(401).json({ success: false, error: 'Invalid token' });
        }
        
        return res.status(500).json({ success: false, error: 'Server error', message: err.message });
    }
};

module.exports = authMiddleware;