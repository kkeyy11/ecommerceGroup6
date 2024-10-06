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
     
        res.render('cart');

    },
    cartpage:(req, res)=>{
        res.render('cartpage');

    },
    login:(req, res)=>{
        res.render('login');

    },
    register:(req, res)=>{
        res.render('register');

    },
    landing:(req, res)=>{
        res.render('landing');  //landing ito

    },
    inshop:(req, res)=>{
        res.render('inshop');  //landing ito

    },
    inshopdetail:(req, res)=>{
        res.render('inshopdetail');  //landing ito

    },
    incontact:(req, res)=>{
        res.render('incontact');  //landing ito

    },
    shoppingcart:(req, res)=>{
        res.render('shoppingcart');  //landing ito

    },
    checkout:(req, res)=>{
        res.render('checkout');  //landing ito

    },
    faq:(req, res)=>{
        res.render('faq');  

    },
    help:(req, res)=>{
        res.render('help');  
    },
    support:(req, res)=>{
        res.render('support');  

    },
    infaq:(req, res)=>{
        res.render('infaq');  

    },
    inhelp:(req, res)=>{
        res.render('inhelp');  
    },
    insupport:(req, res)=>{
        res.render('insupport');  

    },

    save:(req, res)=>{
        const data = req.body;
        info.save(data, (err)=>{
            if (err) throw err;
            res.redirect('./inshop');
        })
       
    }  

};

module.exports = main;