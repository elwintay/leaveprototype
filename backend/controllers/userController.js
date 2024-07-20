const jwt = require("jsonwebtoken")
const userModel = require('../models/userModel')
const mongoose = require('mongoose')
require("dotenv").config()

const handleErrors = (err) => {
    console.log(err)
    let errors = { email: '', password: '' };

    // incorrect email
    if (err.message === 'incorrect email') {
        errors.email = 'That email is not registered';
    }

    // incorrect password
    if (err.message === 'incorrect password') {
        errors.password = 'That password is incorrect';
    }

    // duplicate email error
    if (err.code === 11000) {
        errors.email = 'that email is already registered';
        return errors;
    }

    // validation errors
    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }

    return errors;
}

const createToken = (id) => {
    const callback = (err, token) => {
        if (err) {
            console.error("Error jwt:", err);
        }
    }
    const options = {
        algorithm: process.env.JWT_ALGORITHM,
        expiresIn: process.env.JWT_EXPIRES_IN,
    }
    return jwt.sign({ id }, process.env.JWT_SECRET_KEY, options, callback)
};

const signup_post = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const user = await userModel.create({ email, password });
        const token = createToken(user._id);
        console.log(token)
        res.cookie('jwt', token, { httpOnly: true, maxAge: process.env.COOKIE_MAX_AGE });
        res.status(201).json({ user: user._id });
    }
    catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }

}

const
    login_post = async (req, res) => {
        const { email, password } = req.body;

        try {
            const user = await userModel.login(email, password);
            const token = createToken(user._id);
            res.cookie('jwt', token, { httpOnly: true, maxAge: process.env.COOKIE_MAX_AGE });
            res.status(200).json({ user: user._id });
        } catch (err) {
            const errors = handleErrors(err);
            res.status(400).json({});
        }

    }

module.exports = {
    signup_post,
    login_post
}