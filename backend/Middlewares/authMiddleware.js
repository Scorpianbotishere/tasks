const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    // Extract the token from the request headers
    const token = req.header('Authorization')?.split(' ')[1];


    if (!token) {
        // If no token is provided, return an unauthorized response
        return res.status(401).json({
            success: false,
            error: 'Unauthorized - No token provided'
        });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Attach the decoded user information to the request for later use
        req.user = decoded;

        // Continue to the next middleware or route handler
        next();
    } catch (error) {
        // If the token is invalid, return an unauthorized response
        res.status(401).json({
            success: false,
            error: 'Unauthorized - Invalid token'
        });
    }
};

module.exports = authMiddleware;
