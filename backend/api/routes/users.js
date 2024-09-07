const express = require('express')
const { signup_post, login_post, logout_get } = require('../controllers/userController')

const router = express.Router()

// router.get('/signup', userController.signup_get);
router.post('/signup', signup_post);
// router.get('/login', userController.login_get);
router.post('/login', login_post);
router.get('/logout', logout_get);

module.exports = router