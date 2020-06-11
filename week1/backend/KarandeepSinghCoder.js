var express = require("express");	
var app = express();

app.get("/",function(req,res){
	res.send("Hello");
});
app.get("/user/:user",function(req,res){
	res.send("Hello "+req.params.user);
});
app.get("/date",function(req,res){
	var date = new Date();
	var jdata={day: today.getDate(), month:today.getMonth()+1, year:today.getFullYear()};
    res.json(jdata);
});

app.listen(3000,function(){
	console.log("Server started");
});