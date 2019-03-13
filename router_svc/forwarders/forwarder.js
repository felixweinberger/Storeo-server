const requestModule = require('request');

const forwarder = (domain, requestArg) => async (req, res) => {
  const request = requestArg || requestModule;
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

module.exports = forwarder;