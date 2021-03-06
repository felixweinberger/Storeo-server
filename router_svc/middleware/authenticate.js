const request = require('request-promise-native');
const authUrl = `http://${process.env.AUTH_NAME}:${process.env.AUTH_PORT}`;

module.exports = async (req, res, next) => {
  try {
    const options = {
      url: `${authUrl}/token`,
      method: 'GET',
      headers: {
        authorization: req.headers.authorization
      }
    }
    const authResponse = await request(options);
    req.user = authResponse;
    const { role } = JSON.parse(req.user);
    if (role !== 'admin' && req.originalUrl.indexOf('admin') !== -1) throw new Error(); 
    next();
  } catch (err) {
    res
    .status(401)
    .send('Not Authorized.')
  }
};
