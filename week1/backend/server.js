const express=require('express')
const app=express()

var PORT=3000||process.env.PORT;

var today = new Date();

app.get("/",(req,res)=>{
    res.send("go to /user/:username")
})

app.get("/user/:username",(req,res)=>{
    res.send("hello "+req.params.username)
})
app.get("/date",(req,res)=>{
    res.json({day: today.getDate(),
              month:today.getMonth()+1,
               year:today.getFullYear()});
})

app.listen(PORT,()=>console.log(`server running on port ${PORT}`));