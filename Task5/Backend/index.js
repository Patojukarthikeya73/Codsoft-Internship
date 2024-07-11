const express=require('express');
const DbConnect=require('./DBconn/connection');
const  route  = require('./route/quizroute');
const cors =require('cors');
DbConnect();

const app=express();
const PORT=8080;
app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("Welocome to Backend");
})

app.use(route);


app.listen(PORT,(req,res)=>{
    console.log("Server started...");
});