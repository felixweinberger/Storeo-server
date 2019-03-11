module.exports = async (req, res, next) => {
  try {
    req.body = await new Promise((resolve, reject) => {
      let body = ''
      req.on('data', chunk => body += chunk);
      req.on('end', () => resolve(body))
    });
    next();
  } catch (err) {
    console.log('Error parsing body')
    console.log(err);
  }
};
