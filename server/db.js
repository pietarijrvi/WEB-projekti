var mysql = require('mysql');
var con = mysql.createConnection({

    /*
    host: "mysql.metropolia.fi",
    port: "3306",
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