const request = require('supertest');
const service = require('../');

describe('Payments service', () => {
  it('Should return a 404 get request is received', (done) => {
    request(service)
    .get('/')
    .expect(404)
    .expect('Not found', done);
  })

  it('Should fail to process payment if no data is provided in the body', (done) => {
    request(service)
    .post('/')
    .expect(500)
    .expect('Impossible to process the payment.', done);
  })

  it('Should fail to process payment if no token is provided in the body', (done) => {
    request(service)
    .post('/')
    .send({
      amount: 400
    })
    .expect(500)
    .expect('Impossible to process the payment.', done);
  })

  it('Should fail to process payment if no amount is provided in the body', (done) => {
    request(service)
    .post('/')
    .send({
      token: 'tok_visa'
    })
    .expect(500)
    .expect('Impossible to process the payment.', done);
  })

  it('Should successfully process payment if amount and token posted', () => {
    return Promise.all(cards.map(card => {
      return request(service)
        .post('/')
        .send({
          amount: 400,
          token: card.token
        })
        .expect(200)
        .then(res => res.body === 'Payment successfull.')
        .then(() => true);
    }))
    .then(values => values.every(value => value));
  })
})

const cards = [
	{
    name: 'visa',
    number: 4242424242424242,
    token: 'tok_visa',
  },
	{
    name: 'visaDebit',
    number: 4000056655665556,
    token: 'tok_visa_debit',
  },
	{
    name: 'mastercard',
    number: 5555555555554444,
    token: 'tok_mastercard',
  },
	{
    name: 'mastercard2Series',
    number: 2223003122003222,
    token: 'tok_mastercard',
  },
	{
    name: 'mastercardDebit',
    number: 5200828282828210,
    token: 'tok_mastercard_debit',
  }
]

