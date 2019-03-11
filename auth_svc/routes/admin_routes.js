import express from 'express';
import admin from './adminImports';

const router = express.Router();

// Login
router.get('/login', admin.login);

// Signup
router.post('/signup', admin.signup);

module.exports = router;
