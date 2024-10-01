const express = require('express');
const router = express.Router();
const kmy = require('../controller/MainController');


router.get('/', kmy.index);
router.get('/shop', kmy.shop);
router.get('/shopdetail', kmy.shopdetail);
router.get('/contact', kmy.contact);
router.get('/cart', kmy.cart);
// router.post('/save', kmy.save);


module.exports = router;