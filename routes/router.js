const express = require('express');
const router = express.Router();
const kmy = require('../controller/MainController');


router.get('/', kmy.index);
router.get('/login', kmy.login);
router.get('/register', kmy.register);
router.get('/shop', kmy.shop);
router.get('/shopdetail', kmy.shopdetail);
router.get('/contact', kmy.contact);
router.get('/cart', kmy.cart); //ito yung form para sa add to cart
router.get('/cartpage', kmy.cartpage); //cart page dito nakalista yung mga nasa cart
router.post('/save', kmy.save); //SA SHOP NA ITO


module.exports = router;