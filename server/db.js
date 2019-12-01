var mysql = require('mysql');
var con = mysql.createConnection({
    /*
    host: "localhost",
    user: "jetrosa",
    password: "peterGiraffe21",
    database: "jetrosa"
     */

    host: "localhost",
    user: "jetrosa",
    password: "jetrosa",
    database: "selainpeli"
});

exports.get = function() {
    return con;
};