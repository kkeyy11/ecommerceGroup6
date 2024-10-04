const express = require('express');
const router = express.Router();
const { restrictLandingPageAccess } = require('../middleware/middleware'); //middleware
const kmy = require('../controller/MainController');
const userController = require('../controller/userController');

// Main routes
router.get('/', kmy.index);
router.get('/login', userController.getLogin); // Use userController for login
router.post('/login', userController.postLogin);
router.get('/register', userController.getRegister); // Use userController for register
router.post('/register', userController.postRegister);
router.get('/shop', kmy.shop);
router.get('/shopdetail', kmy.shopdetail);
router.get('/contact', kmy.contact);


//router.get('/landing', kmy.landing); //landing page ito
router.get('/inshop', kmy.inshop);
router.get('/inshopdetail', kmy.inshopdetail);
router.get('/incontact', kmy.incontact);
router.get('/shoppingcart', kmy.shoppingcart);
router.get('/checkout', kmy.checkout);

//restrict direct access
router.get('/landing', restrictLandingPageAccess, kmy.landing);


// //logout
// router.get('/logout', userController.logout);


module.exports = router;
