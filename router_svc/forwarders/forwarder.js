const request = require('request');

module.exports = (domain) => (path) => async (req, res) => {
  try {
    const options = {
      url: `${domain}${path}`,
      method: req.method,
      body: req.body,
      headers: req.headers
    }
    request(options).pipe(res);
  } catch (err) {
    res.status(500).send('Server error!')
  }
};
