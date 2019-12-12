var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12pallohallussa2",
    database: "selainpeli"
});

exports.get = function() {
    return con;
};