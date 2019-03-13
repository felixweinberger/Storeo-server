const request = require('request');

module.exports = (domain) => async (req, res) => {
  try {
    const options = {
      url: `${domain}${req.originalUrl}`,
      method: req.method,
      headers: Object.assign({}, req.headers, {
        "X-User": req.user
      }),
    }
    req
    .pipe(request(options, function (err) {
      if (err) {
        console.log(err);
        res.status(500).send('Server error.');
      }
    }))
    .pipe(res)
  } catch (err) {
    console.log('catch');
    res.status(500).send('Server error!')
  }
};
