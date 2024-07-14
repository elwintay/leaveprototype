const express = require('express')
const { signup_post, login_post } = require('../controllers/userController')

const router = express.Router()

// router.get('/signup', userController.signup_get);
router.post('/signup', signup_post);
// router.get('/login', userController.login_get);
router.post('/login', login_post);

module.exports = router