const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes/router');
const app = express();
const session = require('express-session');
const sequelize = require('./config/database');

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// Move session middleware above the routes
app.use(session({
    secret: 'yourSecret',
    resave: false,
    saveUninitialized: false
}));

app.use('/', routes);

sequelize.sync().then(() => {
    console.log("Database connected");
});

app.listen(8080, () => {
    console.log('Server initialized on http://localhost:8080');
});
