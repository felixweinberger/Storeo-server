const request = require('request');

module.exports = (domain) => async (req, res) => {
  try {
    console.log(req.method, domain, req.originalUrl)
    const options = {
      url: `${domain}${req.originalUrl}`,
      method: req.method,
      body: req.body,
      headers: req.headers
    }
    request(options).pipe(res);
  } catch (err) {
    res.status(500).send('Server error!')
  }
};
