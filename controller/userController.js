const bcrypt = require('bcrypt');
const User = require('../models/userModel');

exports.getLogin = (req, res) => {
    res.render('login');
};

exports.postLogin = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user && await bcrypt.compare(password, user.password)) {
        req.session.user = user;
        res.redirect('/landing'); // Redirect after login
    } else {
        res.render('login', { error: 'Invalid email or password' });
    }
};

exports.getRegister = (req, res) => {
    res.render('register');
};

exports.postRegister = async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ name, email, password: hashedPassword });
    res.redirect('/login');
};


exports.logout = (req, res) => {
    // Destroy the session to log the user out
    req.session.destroy((err) => {
        if (err) {
            console.log('Error destroying session:', err);
            return res.redirect('/'); // In case of error, redirect to the homepage
        }
        res.redirect('/'); // After logout, redirect to login page
    });
};

