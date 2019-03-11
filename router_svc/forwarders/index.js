const forwarder = require('./forwarder');
const authUrl = `http://${process.env.AUTH_NAME}:${process.env.AUTH_PORT}`;
const paymentsUrl = `http://${process.env.PAYMENTS_NAME}:${process.env.PAYMENTS_PORT}`;
const storeUrl = `http://${process.env.STORE_NAME}:${process.env.STORE_PORT}`;

exports.auth = forwarder(authUrl);
exports.payments = forwarder(paymentsUrl);
exports.store = forwarder(storeUrl);