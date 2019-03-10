const express = require('express');
const Stripe = require('stripe');
const cors = require('cors');
const logger = require('morgan');

const service = express();
const stripe = Stripe(process.env.SK_STRIPE);

service
.use(logger('tiny'))
.use(cors())
.use(express.json())
.use(async (req, res) => {
  try {
    // eslint-disable-next-line
    const { amount, token } = req.body;
    console.log(amount, token);
    const charge = await stripe.charges.create({
      amount: parseInt(amount, 10) * 100,
      currency: 'eur',
      source: token,
    });

    // eslint-disable-next-line
    console.log('charge is ', charge);

    res
    .status(200)
    .send('Payment successful.');
  } catch (err) {
    //  eslint-disable-next-line
    console.error('Error in stripeCharge Controller =>', err);
    err.errorMessage = 'Impossible to process the payment.';
    res
    .status(500)
    .send('Impossible to process the payment.');
  }
})

service.listen(process.env.PAYMENTS_PORT, () => {
  console.log(`Payments service listening on port ${process.env.PAYMENTS_PORT}`);
})