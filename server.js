const express = require("express");

require('dotenv').config()

const app = express();

app.listen(process.env.PORT , (err)=>{
    if (err) {
        console.log(err);
    }else{
        console.log(`connecté sur le port ${process.env.PORT}`);  
    }
})