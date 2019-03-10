const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const rawBody = require('./middleware/rawBody');
const service = express();
const routes = require('./routes');

service  
.use(logger('tiny'))
.use(cors())
.use(rawBody)
.use(routes);

service.listen(process.env.ROUTER_PORT, () => {
  console.log(`Router service listening on port ${process.env.ROUTER_PORT}`)
})