const model = require('./model');

const controller = {};

controller.login = async (req, res) => {
  try {
    console.log('logging in');
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
    res.status(500);
  }
};

controller.signup = async (req, res) => {
  try {
    console.log('signing up');
    const result = await model.addUser({
      password: 'test',
    });
    console.log(result);
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
    res.status(500);
  }
};

controller.checktoken = async (req, res) => {
  try {
    console.log('checking token');
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
    res.status(500);
  }
};

module.exports = controller;
