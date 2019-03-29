const router = require('express').Router();
const { auth, payments, store } = require('../forwarders');
const authenticate = require('../middleware/authenticate');

router.post('/signup', auth);
router.get('/login', auth);

router.get('/products', store);
router.get('/products/:productId', store);
router.get('/products/cat/:categoryId', store);

// Categories
router.get('/categories', store);
router.get('/categories/:categoryId', store);

// Orders
router.post('/orders', authenticate, store);

// Add Address
router.post('/address', authenticate, store);

//  Previous Orders
router.get('/orders', authenticate, store);

// Search
router.get('/search', store);

// Stripe charge
router.post('/charge', authenticate, payments);

module.exports = router;