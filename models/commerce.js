const db = require('../config/db');
const cartitems = { //table name
    save:(data, callback) =>{
        const query ="insert into cartitems (method, location, sizes) values (?,?,?)";
        db.query(query,  [data.method, data.location, data.sizes], callback);
    }

};
module.exports = cartitems;