const jwt = require("jsonwebtoken")
const userModel = require('../models/userModel')
const authMiddleware = require('../middleware/authMiddleware')
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

const signup_post = async (req, res, next) => {
    const { email, username, password, team } = req.body;

    try {
        const user = await userModel.create({ email, username, password, team });
        const tokenInput = {userid: user.id.toString(), username: user.username}
        const token = authMiddleware.createToken(tokenInput);
        res.cookie('jwt', token, { httpOnly: true, maxAge: process.env.COOKIE_MAX_AGE, sameSite: 'None' });
        res.status(201).json({ user: tokenInput });
    }
    catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }

}

const login_post = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userModel.login(email, password);
        const tokenInput = {userid: user.id.toString()}
        const token = authMiddleware.createToken(tokenInput);
        // res.cookie('jwt', token, { httpOnly: true, maxAge: process.env.COOKIE_MAX_AGE, sameSite: 'None' });
        res.cookie('jwt', token, { httpOnly: true, sameSite: 'None' });
        res.cookie('username', user.username, { sameSite: 'None' })
        res.status(200).json({ user: tokenInput });
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({});
    }

}

const logout_get = (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 });
    res.cookie('username', '', { maxAge: 1 });
    res.status(200).json({ message: "Logged out successfully" });
}

module.exports = {
    signup_post,
    login_post,
    logout_get
}