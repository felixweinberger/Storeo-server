import express from 'express';
import user from './userImports';

const router = express.Router();
router.get('/', (req, res) => res.send('hello'));
// Signup
router.post('/signup', user.signup);

// Login
router.get('/login', user.login);

//  Products
router.get('/products', user.getAllProducts);
router.get('/products/:productId', user.getProductById);
router.get('/products/cat/:categoryId', user.getProductsByCategoryId);

// Categories
router.get('/categories', user.getAllCategories);
router.get('/categories/:categoryId', user.getCategoryById);

// Orders
router.post('/orders', user.postNewOrder);

// Add Address
router.post('/address', user.updateAddress);

//  Previous Orders
router.get('/orders', user.getOrdersFromUser);

// Search
router.get('/search', user.getSearchProducts);

// Stripe charge
router.post('/charge', user.stripeCharge);

module.exports = router;
