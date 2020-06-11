const express = require('express')
const app = express()

monthList = ["january", "febuary", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]

// routes
app.get('/',(req, res)=>{
    res.send("Hello");
})

app.get('/user/:username',(req, res)=>{
    res.send("Hello " + req.params.username);
})

app.get('/date', (req, res)=>{
    d = new Date()
    res.json({
        day : d.getDate(),
        month : monthList[d.getMonth()],
        year : d.getFullYear(),
    })
})

// init server
let port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log("app started on", port);
})