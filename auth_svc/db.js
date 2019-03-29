require('dotenv').config();
const Sequelize = require('sequelize');

// Connect to database
const dbConnection = new Sequelize(
  process.env.AUTH_DB_NAME,
  process.env.AUTH_DB_USER,
  process.env.AUTH_DB_PASSWORD,
  {
    host: process.env.AUTH_DB_HOST,
    logging: false,
    dialect: 'mysql',
  },
);

// Test the connection
dbConnection
  .authenticate()
  .then(() => {
    if (!process.env.TEST_ENV) {
      // eslint-disable-next-line
      console.log(
        `✅ Connection to authentication database ${process.env.AUTH_DB_NAME} at ${process.env.AUTH_DB_HOST}:${process.env.AUTH_DB_PORT} has been established successfully.`,
      );
    }
  })
  .catch((err) => {
    // eslint-disable-next-line
    console.error('❌ Unable to connect to the authentication database: ', err);
  });

// when imported `dbConnection` is imported as `sequelize`
module.exports = dbConnection;
