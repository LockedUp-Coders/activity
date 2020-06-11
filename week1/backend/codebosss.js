var express = require("express");	
var app = express();

app.get("/",function(req,res){
	res.send("Hello");
});
app.get("/user/:username",function(req,res){
	res.send("Hello "+req.params.username);
});
app.get("/date",function(req,res){
	var today = new Date();
    res.json({day: today.getDate(), month:today.getMonth()+1, year:today.getFullYear()});
});

app.listen(3000,function(){
	console.log("Server has started");
});