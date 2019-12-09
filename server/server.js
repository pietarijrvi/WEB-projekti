var express = require('express');
let cors = require('cors');
//var path = require('path');
var app = express();
const bodyParser = require('body-parser');

app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(cors);

app.use(bodyParser.json());

app.use('/api', require('./routes/api'));

app.get('/', function (req, res) {
    console.log("Hello World");
    res.send('Hello World');
    //res.sendFile(path.join(__dirname + '/databaseList.html'));
});

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listenin at http://%s:%s", host, port);
});