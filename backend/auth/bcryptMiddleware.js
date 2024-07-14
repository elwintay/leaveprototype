require("dotenv").config();
const bcrypt = require("bcrypt");

const salt = process.env.SALT_ROUNDS;

var bcryptMiddleware = {
    comparePassword: (req, res, next) => {
        // Check password
        const callback = (err, isMatch) => {
            if (err) {
                console.error("Error bcrypt:", err);
                res.status(500).json(err);
            } else {
                if (isMatch) {
                    next();
                } else {
                    res.status(401).json({
                        message: "Wrong password",
                    });
                }
            }
        };
        bcrypt.compare(req.body.password, res.locals.hash, callback);
    },
    hashPassword: (password) => {
        const callback = (err, hash) => {
            if (err) {
                console.error("Error bcrypt:", err);
            }
        };
        return bcrypt.hash(password, parseInt(salt), callback);
    }
}

module.exports = bcryptMiddleware;