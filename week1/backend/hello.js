var express=require("express");
var app=express()
var date=new Date();

const port=3000;


app.get("/",function (req, res){
    res.send("hello ")

});

app.get("/date",function (req, res){
    res.json({date:date.getDate(),
            month:date.getMonth(),
            year:date.getFullYear()
    
    })

});

app.get("/user/:username",function(req, res){
    res.send(req.params.username);

})



app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));