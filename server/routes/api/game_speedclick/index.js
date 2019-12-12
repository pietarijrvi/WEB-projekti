var router = require('express').Router();
var SqlString = require('sqlstring');
var url = require('url');
var con = require('../../../db.js');
const { check, validationResult } = require('express-validator');

/**
 * @api {get} scores/top/alltime Request all time best scores (descending order, best score first).
 * @apiGroup Speedclick game
 *
 * @apiSuccess {Number} time gameplay time
 * @apiSuccess {Number} clicks amount of clicks
 * @apiSuccess {Datetime} datetime  datetime of the score submit.
 * @apiSuccess {String} username  Username.
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *      {
 *          "time": 5,
 *          "clicks": 8,
 *          "datetime": "2019-12-10T23:46:57.000Z",
 *          "username": "anon"
 *      },
 *      {
 *          "time": 5,
 *          "clicks": 3,
 *          "datetime": "2019-12-11T13:53:35.000Z",
 *          "username": "anon"
 *      }
 */
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

/**
 * @api {get} scores/top/daily Request current day best scores (descending order, best score first)
 * @apiGroup Speedclick game
 *
 * @apiSuccess {Number} time gameplay time
 * @apiSuccess {Number} clicks amount of clicks
 * @apiSuccess {Datetime} datetime  datetime of the score submit.
 * @apiSuccess {String} username  Username.
 */
router.get('/scores/top/daily', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");

    const q = url.parse(req.url, true).query;
    const time=q.time;
    const limit=10;

    const sql = SqlString.format("SELECT game2.time, game2.clicks, game2.datetime, user.username"
        + " FROM game2, user"
        + " WHERE game2.user_id = user.user_id"
        + " and DATE(game2.datetime) = CURDATE()"
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

/**
 * @api {get} scores/top/monthly Request monthly best scores (descending order, best score first)
 * @apiGroup Speedclick game
 *
 * @apiSuccess {Number} time gameplay time
 * @apiSuccess {Number} clicks amount of clicks
 * @apiSuccess {Datetime} datetime  datetime of the score submit.
 * @apiSuccess {String} username  Username.
 */
router.get('/scores/top/monthly', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");

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

/**
 * @api {get} scores/user Request 10 best scores of the user (descending order, best score first)
 * @apiGroup Speedclick game
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {Number} time gameplay time
 * @apiSuccess {Number} clicks amount of clicks
 * @apiSuccess {Datetime} datetime  datetime of the score submit.
 * @apiSuccess {String} username  Username.
 */
router.get('/scores/user', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");

    const q = url.parse(req.url, true).query;
    const userID=q.userID;
    const limit=10;

    const sql = SqlString.format("SELECT game2.time, game2.clicks, game2.datetime, user.username"
        + " FROM game2, user"
        + " WHERE game2.user_id = user.user_id"
        + " and user.user_id = ?"
        + " ORDER BY game2.clicks/game2.time DESC"
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

/**
 * @api {post} scores/ Post score result
 * @apiGroup Speedclick game
 *
 * @apiParam {Number} time gameplay time
 * @apiParam {Number} clicks amount of clicks
 * @apiParam {Number} userID Users unique ID.
 *
 * @apiSuccess {String} Success message (score added).
 */
router.post('/scores/', [
    // time must be an int
    check('time').isInt(),
    // clicks must be an int
    check('clicks').isInt(),
    // userID must be an int
    check('userID').isInt()
], function (req, res) {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
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