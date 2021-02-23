require('dotenv').config();
var express = require('express');

let port = process.env.PORT || 3003;

var app = express();



app.get('/',(req,res,next)=>{
    res.send("Hi webservice");
    });



app.listen(port,()=>console.log('Server is runing on port',port));
