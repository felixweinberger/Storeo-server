const express = require('express');
// const model = require('./model');

const app = express();
app.get('/login', () => console.log('login'));
app.post('/signup', () => console.log('hi there'));
app.get('/checktoken', () => console.log('hi there'));

app.listen(process.env.AUTH_PORT, () => {
  console.log(`Auth service listening on port ${process.env.AUTH_PORT}`);
});
