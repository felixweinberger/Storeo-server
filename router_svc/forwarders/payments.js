const request = require('request');
const paymentsUrl = `http://${process.env.PAYMENTS_NAME}:${process.env.PAYMENTS_PORT}`;

module.exports = async (req, res) => {
  try {
    const options = {
      url: `${paymentsUrl}${req.path}`,
      method: req.method,
      body: req.body,
      headers: req.headers
    }
    request(options).pipe(res);
  } catch (err) {
    res
    .status(500)
    .send('Impossible to process the payment.');
  }
};
