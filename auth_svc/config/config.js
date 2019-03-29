const path = require('path');

const pathName = process.env.NODE_ENV === 'test'
  ? path.join(__dirname, '/../.env.test')
  : path.join(__dirname, '/.env');

require('dotenv').config({ pathName });

module.exports = {
  development: {
    username: process.env.AUTH_DB_USER,
    password: process.env.AUTH_DB_PASSWORD,
    database: process.env.AUTH_DB_NAME,
    host: process.env.AUTH_DB_HOST,
    dialect: 'mysql',
    logging: false,
    retry: {
      max: 20,
    },
  },
  /*
  ---------------------------------------------
  UNCOMMENT THESE AS NEEDED
  ---------------------------------------------

  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: 'mysql',
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: 'mysql',
  },
  */
};
