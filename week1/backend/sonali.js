const express = require ("express");
const app =express();

app.get("/",function(req,res){
  res.send("<h1> hello </h1>");
});

app.get("/user/sonali",function(req,res){
  res.send("<h1> hello sonali </h1>");
});

app.get("/date",function(req,res){
  var today=new Date();
  var info ={
    day: today.getDate() ,
    month: today.toLocaleString('default', { month: 'long' }),
    year: today.getFullYear()
  };


res.send(JSON.stringify(info,null,' '));
});


app.listen(3000,function(){
  console.log("server is running");
});
