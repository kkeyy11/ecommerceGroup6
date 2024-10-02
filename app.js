const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes/router');
const app = express();
const session = require('express-session'); //userlogin
const sequelize = require('./config/database');

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', routes);

app.use(session({   //loginregister
    secret: 'yourSecret',
    resave: false,
    saveUninitialized: false
}));



sequelize.sync().then(() => {
    console.log("Database connected");
});



app.listen(8080, ()=>{
    console.log('server initialized on http://localhost:8080')
})