const info = require('../models/commerce');


const main = {
    index:(req, res)=>{
        res.render('index');

    },
    shop:(req, res)=>{
        res.render('shop');

    },
    shopdetail:(req, res)=>{
        res.render('shopdetail');

    },
    contact:(req, res)=>{
        res.render('contact');

    },
    cart:(req, res)=>{
        res.render('addtocart');

    },
    cartpage:(req, res)=>{
        res.render('cartpage');

    },
    save:(req, res)=>{
        const data = req.body;
        info.save(data, (err)=>{
            if (err) throw err;
            res.redirect('./shop');
        })
       
    }   

};

module.exports = main;