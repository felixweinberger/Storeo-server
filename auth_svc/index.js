import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import errorHandler from './Middlewares/errorHandler';

const logger = require('morgan');
const { db } = require('./Schemas');

const app = express();
const PORT = process.env.AUTH_PORT || 3001;
const ENV = process.env.NODE_ENV || 'development';

db.setup();

// don't use the logger for testing to keep mocha clean
if (!module.parent) app.use(logger('tiny'));
app
  .use(express.json())
  .use(bodyParser.text('text/plain'))
  .use(routes)
  .use(errorHandler);

// only run the server when the script is executed standalone (not for tests)
if (!module.parent) {
  app.listen(PORT, (err) => {
    // eslint-disable-next-line
    if (err) console.error('❌ Unable to connect the server: ', err);
    // eslint-disable-next-line
    console.log(`🌍 Authentication server listening on port ${PORT} - ${ENV} environment`);
  });
}

export default app;
