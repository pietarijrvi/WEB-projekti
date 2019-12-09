var router = require('express').Router();
var SqlString = require('sqlstring');
var url = require('url');
var con = require('../../../db.js');

router.get('/scores/top/alltime', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");

    const limit=10;

    const sql = SqlString.format("SELECT game1.score, game1.datetime, user.username"
        + " FROM game1, user"
        + " WHERE game1.user_id = user.user_id"
        + " ORDER BY game1.score"
        + " LIMIT ?", [limit]);

    con.get().query(sql, function (err, result) {
        if (err) {
            throw err;
        }
        console.log(result);
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(result));
    });
});

router.get('/scores/top/daily', function (req, res) {

    const limit=10;
    const d = new Date();
    const day = d.getDay();

    const sql = SqlString.format("SELECT game1.score, game1.datetime, user.username"
        + " FROM game1, user"
        + " WHERE game1.user_id = user.user_id"
        + " and DAY('game1.datetime') [?]"
        + " ORDER BY game1.score"
        + " LIMIT ?", [day, limit]);

    con.get().query(sql, function (err, result) {
        if (err) {
            throw err;
        }
        console.log(result);
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(result));
    });
});

router.get('/scores/top/monthly', function (req, res) {

    const limit=10;
    const d = new Date();
    const month = d.getMonth();

    const sql = SqlString.format("SELECT game1.score, game1.datetime, user.username"
        + " FROM game1, user"
        + " WHERE game1.user_id = user.user_id"
        + " and MONTH('game1.datetime') [?]"
        + " ORDER BY game1.score"
        + " LIMIT ?", [month, limit]);

    con.get().query(sql, function (err, result) {
        if (err) {
            throw err;
        }
        console.log(result);
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(result));
    });
});


router.get('/scores/user', function (req, res) {
    console.log("game1 user scores");
    const q = url.parse(req.url, true).query;
    const userID=q.userID;
    const limit=5;

    const sql = SqlString.format("SELECT game1.score, game1.datetime, user.username"
        + " FROM game1, user"
        + " WHERE game1.user_id = user.user_id"
        + " and user.user_id = ?"
        + " ORDER BY game1.score"
        + " LIMIT ?", [userID, limit]);

    con.get().query(sql, function (err, result) {
        if (err) {
            throw err;
        }
        console.log(result);
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(result));
    });
});

router.post('/scores/', function (req, res) {
    console.log("Receiving score - POST");
    const rb = req.body;
    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date+' '+time;

    const scoreSQL = SqlString.format("INSERT INTO game1 (game1.score, game1.user_id, game1.datetime) VALUES(?,?,?)",[rb.score, rb.userID, dateTime]);

    con.get().query(scoreSQL, function (err, result) {
        if (err) {
            throw err;
        }
        console.log(result);
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end("Success - score added");
    });
});

module.exports = router;