const express = require('express');
const router = express.Router();
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
router.get('/cart', kmy.cart); 
router.get('/cartpage', kmy.cartpage);
router.get('/landing', kmy.landing); //landing page ito

router.post('/save', kmy.save);


module.exports = router;
