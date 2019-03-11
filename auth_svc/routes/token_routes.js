import express from 'express';
import token from './tokenImports';

const router = express.Router();

// Checktoken
router.get('/', token.token);

module.exports = router;
