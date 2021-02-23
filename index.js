const express = require('express');

const port =5000;

const app = express();



app.get('/',(req,res,next)=>{
    res.send("Hi webservice");
    });



app.listen(port,()=>{console.log('Server is runing on port',port);});
