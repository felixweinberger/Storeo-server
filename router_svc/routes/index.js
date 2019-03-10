const router = require('express').Router();
const { auth, payments } = require('../forwarders');

router.post('/signup', auth('/signup'));
router.get('/login', auth('/login'));
router.post('/charge', payments('/'));

module.exports = router;