var express = require('express');
var app = express();

// This responds with "Hello World" on root
app.get('/', function (req, res) {
   
   res.send('Hello');
})


// This responds a GET request for the /user/username
app.get('/user/:username', function (req, res) {
   
   res.send('Hello '+req.params.username);
})

// displays date
app.get('/date', function(req, res) {   
   dt= new Date()
   const months = ['Jan', 'Feb', 'Mar', 
   'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
   res.send({"day" : dt.getDate(), "month" : months[dt.getMonth()], "year" : dt.getFullYear()});
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
