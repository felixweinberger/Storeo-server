import express from 'express';
import user from './userImports';
import authMiddleware from '../Middlewares/authorization';
import gateMiddleware from '../Middlewares/gate';

const router = express.Router();

// Signup
router.post('/signup', user.signup);

// Login
router.get('/login', user.login);

// Add Address
router.post('/address', authMiddleware, gateMiddleware, user.updateAddress);

module.exports = router;
