const express = require('express');
const ctrl = require('./controller');

const app = express();

app.use(express.json());

app.get('/login', ctrl.login);
app.post('/signup', ctrl.signup);
app.get('/checktoken', ctrl.checktoken);

app.listen(process.env.AUTH_PORT, () => {
  console.log(`Auth service listening on port ${process.env.AUTH_PORT}`);
});
