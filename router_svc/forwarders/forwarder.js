const request = require('request');

module.exports = (domain) => async (req, res) => {
  try {
    const options = {
      url: `${domain}${req.originalUrl}`,
      method: req.method,
      headers: req.headers
    }
    req.pipe(request(options)).pipe(res);
  } catch (err) {
    res.status(500).send('Server error!')
  }
};
