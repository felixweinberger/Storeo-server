const router = require('express').Router();
const { auth, payments, store } = require('../forwarders');
const authenticate = require('../middleware/authenticate');

router.post('/signup', auth);
router.get('/login', auth);

router.get('/products', store);
router.get('/products/:productId', store);
router.get('/products/cat/:categoryId', store);

// router.use(authenticate);

// Products
router.post('/products', store);
router.get('/products/:productId', store);
router.get('/products', store);
router.get('/products/cat/:categoryId', store);
router.delete('/products/:productId', store);
router.put('/products/:productId', store);

// Orders
router.get('/orders', store);

// Categories
router.get('/categories', store);
router.post('/categories', store);
router.put('/categories/:categoryId', store);
router.delete('/categories/:categoryId', store);

module.exports = router;