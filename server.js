const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./router/userRouter");
const bookRouter = require("./router/bookRouter")

require('dotenv').config();

const app = express();
app.use(express.json())
app.use(userRouter)
app.use(bookRouter)

app.listen(process.env.PORT , (err)=>{
    if (err) {
        console.log(err);
    }else{
        console.log(`connecté sur le port ${process.env.PORT}`);  
    }
})

mongoose.connect(process.env.URL_BDD)