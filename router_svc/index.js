const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const service = express();
const routes = require('./routes');

service  
.use(logger('tiny'))
.use(cors())
.use(routes)
.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
});

process.on('uncaughtException', err => {
  console.error('uncaughtException: ' + err.message);
  console.error(err.stack);
  process.exit(1);
})

if (process.env.NODE_ENV === 'test') {
  module.exports = server;
} else {
  service.listen(process.env.ROUTER_PORT, () => {
    console.log(`Router service listening on port ${process.env.ROUTER_PORT}`)
  })
}