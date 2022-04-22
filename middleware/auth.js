const jwt = require('jsonwebtoken');
require('dotenv').config()

const authenticatToken = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        const token = authHeader && authHeader.split(' ')[1];
        if (token == null) {
            res.sendStatus(401);
        }
        const decodedData = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.user = decodedData;
        next();
    } catch (err) {
        res.sendStatus(403);
    }
}

module.exports = authenticatToken;