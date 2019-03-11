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
    .on('error', err => console.log(err))
    .pipe(request(options))
    .pipe(res);
  } catch (err) {
    res.status(500).send('Server error!')
  }
};

function addAuth (cb) {
  this.push()
  cb();
}