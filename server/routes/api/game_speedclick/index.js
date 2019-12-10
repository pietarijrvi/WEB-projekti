var router = require('express').Router();
var SqlString = require('sqlstring');
var url = require('url');
var con = require('../../../db.js');

router.get('/scores/top/alltime', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");

    const q = url.parse(req.url, true).query;
    const time=q.time;
    const limit=10;

    const sql = SqlString.format("SELECT game2.time, game2.clicks, game2.datetime, user.username"
        + " FROM game2, user"
        + " WHERE game2.user_id = user.user_id"
        + " and game2.time = ?"
        + " ORDER BY game2.clicks DESC"
        + " LIMIT ?", [time, limit]);

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
    let day = d.getDate();
    if(day<10)
    {
        day='0'+day;
    }
    console.log(day);

    const sql = SqlString.format("SELECT game2.time, game2.clicks, game2.datetime, user.username"
        + " FROM game2, user"
        + " WHERE game2.user_id = user.user_id"
        + " and DATE(game2.datetime) = = CURDATE()"
        + " and game2.time = ?"
        + " ORDER BY game2.clicks DESC"
        + " LIMIT ?", [day, time, limit]);

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

    const q = url.parse(req.url, true).query;
    const time=q.time;
    const limit=10;
    const d = new Date();
    const month = d.getMonth();

    const sql = SqlString.format("SELECT game2.time, game2.clicks, game2.datetime, user.username"
        + " FROM game2, user"
        + " WHERE game2.user_id = user.user_id"
        + " and MONTH(game2.datetime) = ?"
        + " and game2.time = ?"
        + " ORDER BY game2.clicks DESC"
        + " LIMIT ?", [month, time, limit]);

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

    const q = url.parse(req.url, true).query;
    const userID=q.userID;
    const limit=5;

    const sql = SqlString.format("SELECT game2.time, game2.clicks, game2.datetime, user.username"
        + " FROM game2, user"
        + " WHERE game2.user_id = user.user_id"
        + " and user.user_id = ?"
        + " ORDER BY game2.clicks DESC"
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

    const scoreSQL = SqlString.format("INSERT INTO game2 (game2.time, game2.clicks, game2.user_id, game2.datetime) VALUES(?,?,?,?)",[rb.time, rb.clicks, rb.userID, dateTime]);

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