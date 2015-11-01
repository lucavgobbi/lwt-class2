/**
 * Created by lucavgobbi on 2015-11-01.
 */

var express = require('express');
var app = express();

app.get('/test', function (req, res) {
    res.status(200).send('This is another route');
})

app.get('/', function (req, res) {
    res.status(200).send('Hello World!');
});

var server = app.listen(3000, function () {
    console.log('Hey I am running ;)');
});