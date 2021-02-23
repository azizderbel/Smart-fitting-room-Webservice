const express = require('express');
var mongoose= require('mongoose');
//const PORT =3000;
var PORT = process.env.PORT || 8080;
const app = express();


mongoose.connect('mongodb+srv://admin:admin@cluster0.promn.mongodb.net/PIDB',{useNewUrlParser: true, useUnifiedTopology: true});
var db= mongoose.connection;

db.once('open',function(){
console.log("Connected to mongoDB Cloud");
});

app.get('/hello',(req,res,next)=>{
    res.send("Hi webservice");
    });



app.listen(PORT,()=>{console.log('Server is runing on port',PORT);});
