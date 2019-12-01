var router = require('express').Router();
var SqlString = require('sqlstring');
var url = require('url');
var con = require('../../db.js');

router.get('/scores/game1/top', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");

    const limit=10;

    const sql = SqlString.format("SELECT game1.score, user.username"
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

router.get('/scores/game1/user', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");

    const q = url.parse(req.url, true).query;
    const userID=q.userID;
    const limit=5;

    const sql = SqlString.format("SELECT game1.score, user.username"
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

router.post('/scores/game1', function (req, res) {
    console.log("Receiving score - POST");
    const rb = req.body;

    const scoreSQL = SqlString.format("INSERT INTO game1 (game1.score, game1.user_id) VALUES(?,?)",[rb.score, rb.userID]);

    con.get().query(scoreSQL, function (err, result) {
        if (err) {
            throw err;
        }
        console.log(result);
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end("Success - score added");
    });

    //res.send(req.body);
});

module.exports = router;