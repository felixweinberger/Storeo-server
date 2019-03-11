// here is the centralized file for all the routes for further routing

const express = require('express');

const router = express.Router();

const userRoutes = require('./user_routes');

const adminRoutes = require('./admin_routes');

const tokenRoutes = require('./token_routes');

router
  .use('/token', tokenRoutes)
  .use('/admin', adminRoutes)
  .use('/', userRoutes);

module.exports = router;
