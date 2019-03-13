/* eslint-env mocha */
import test from 'tape';
import requestPromise from 'request-promise';

const before = test;
const after = test;

const beforeEach = () => {/*test setup*/};
const afterEach = () => {/*test cleanup*/};
before('before', (t) => {/*one time setup*/});

test('POST /signup', (t) => {
  beforeEach()
    .then(() => (
      requestPromise({
        method: 'POST',
        uri: 'http://auth:3001/signup',
        body: {
          thing: 'this thing',
        },
      })
    ))
    .then((response) => {
      // inspect the response
      t.equal(response.statusCode, 200, 'statusCode: 200');
    })
    .then(() => (
      // inspect the database
      auth_db.table('users')
        .filter({
          thing: 'this thing',
        })
        .count()
        .run(connection)
        .then((value) => {
          t.equal(value, 1, 'have data');
        })
    ))
    .catch((error) => t.fail(error))
    .then(() => afterEach())
    .then(() => t.end());
});

after('after', (t) => {/*one time setup*/});
