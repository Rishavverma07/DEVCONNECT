const express = require('express');

const app = express();

app.get('/',(req,res)=>{
  res.send("hello user");
})

app.get('/home',(req,res)=>{
  res.send("hello home");
})

app.get('/about',(req,res)=>{
  res.send("hello about");
})

app.listen(3000,()=>{
  console.log("server is listening")
})

