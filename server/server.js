var express = require('express');
let cors = require('cors');
var app = express();
const bodyParser = require('body-parser');

app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.use(bodyParser.json());
app.use(cors());

app.use('/api', require('./routes/api'));

app.get('/', function (req, res) {
    res.send('Selainpeli API');
});

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
});