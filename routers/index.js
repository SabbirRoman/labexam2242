//modules
const express = require("express");
const req = require("express/lib/request");
const mongoose =require("mongoose");


//routers
const catsrouter = require("./routes/cats.router");


const app=express();
const PORT=3000;

//database connection
const lacalDatabaseUrl= "mongodb://127.0.0.1:27017/labexam";
const remoteDatabaseUrl ="mongodb+srv://suvashkumar:VoR65e2i86fYalCR@cluster0.dzm1b.mongodb.net/labexam?retryWrites=true&w=majority";
const conn=mongoose.connect(remoteDatabaseUrl);
conn.then(()=>{
    console.log("Database suerver connectd...");
},(err)=>{
    console.log("Error: error occured during connecting to database");
}
)
app.use("api/cats", catsrouter);
app.listen(PORT,(req,res)=>{
    console.log("Server is")
})