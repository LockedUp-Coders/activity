const http = require('http');
const express = require('express');

const app = express();


const server = http.createServer(app);



app.get('/',(req,res,next)=>{
    res.send('Hello');
});

app.get('/user/:username',(req,res,next)=>{
    res.send('Hello '+ req.params.username);
});


app.get('/date',(req,res,next)=>{
    var date = new Date();
    res.json({day: date.getDate(), month:date.getMonth()+1, year:date.getFullYear()});
});


server.listen(8000);