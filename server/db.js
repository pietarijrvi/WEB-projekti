var mysql = require('mysql');
var con = mysql.createConnection({

    /*
    host: "mysql.metropolia.fi",
    port: "3306",
    user: "jetrosa@users.metropolia.fi",
    password: "peterGiraffe21",
    database: "jetrosa"
    */

    host: "localhost",
    user: "root",
    password: "12pallohallussa2",
    database: "selainpeli"
});

exports.get = function() {
    return con;
};