const jwt = require('jsonwebtoken');
const config = require('./../config/dev.json');

exports.verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(403).send({ message: 'Cannot find the token.' })
    }
    jwt.verify(token, config.jwtSecretKey, (err, decodedToken) => {
        if (err) {
            return res.status(401).send({ message: 'Unauthorized' })
        }
        req.user = decodedToken;
        next();
    })
};


exports.verifyAdmin = (req, res, next) => {
    const role = req.user.role;
    if (role.toLowerCase() !== "admin") {
        return res.status(401).send({ message: 'Unauthorized' })
    }
    next();
}