var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send("Hello!");
})

app.get('/user/:username', function(req, res) {
    res.send("Hello " + req.params.username);
})

app.get("/date", function(req, res) {
    var dateObj = new Date()
    res.json({
        day: dateObj.getDate(),
        month: dateObj.getMonth() + 1,
        year: dateObj.getFullYear()
    });
})

app.get('*', function(req, res) {
    res.send('Sorry, this is an invalid URL.');
})

app.listen(3000);