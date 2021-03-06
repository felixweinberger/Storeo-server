import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './routes';
import errorHandler from './Middlewares/errorHandler';
import attachUser from './Middlewares/attachUser';

const logger = require('morgan');
const { db } = require('./Schemas');

const app = express();
const PORT = process.env.STORE_PORT || 3000;
const ENV = process.env.NODE_ENV || 'development';

db.setup();
app
  .use(logger('tiny'))
  .use(cors())
  .use(express.json())
  .use(bodyParser.text('text/plain'))
  .use(attachUser)
  .use(routes)
  .use(errorHandler);

app.listen(PORT, (err) => {
  // eslint-disable-next-line
  if (err) console.error('❌ Unable to connect the server: ', err);
  // eslint-disable-next-line
  console.log(`🌍 Server listening on port ${PORT} - ${ENV} environment`);
});
