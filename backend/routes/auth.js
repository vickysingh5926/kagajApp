const express = require('express')
const { signup, login, forgotpassword, resetpassword, resetpassworddone } = require('../controllers/auth')

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/forgot-password', forgotpassword);
router.get('/reset-password/:id/:token', resetpassword);
router.post('/reset-password/:id/:token', resetpassworddone);

module.exports = router;