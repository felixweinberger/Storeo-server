const router = require('express').Router();
const userRoutes = require('./user');
const adminRoutes = require('./admin');

router
.use('/', userRoutes)
.use('/admin', adminRoutes);

module.exports = router;