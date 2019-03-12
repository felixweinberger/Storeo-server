import express from 'express';
import user from './userImports';

const router = express.Router();

// Signup
router.post('/signup', user.signup);

// Login
router.get('/login', user.login);

module.exports = router;
