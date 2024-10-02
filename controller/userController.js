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
        res.redirect('/'); // Redirect after login
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
