require('dotenv').config();
var express = require('express');
var mongoose= require('mongoose');
const Model = require('./models/article');
let port = process.env.PORT || 3003;

var app = express();
mongoose.connect('mongodb+srv://admin:admin@cluster0.promn.mongodb.net/PIDB',{useNewUrlParser: true, useUnifiedTopology: true});
var db= mongoose.connection;

db.once('open',function(){
console.log("Connected to mongoDB Cloud");
});



app.get('/',(req,res,next)=>{
    Model.find(function (err, data) {
        if (err) return console.error(err);
        res.send(data);
      })
    });



app.listen(port,()=>console.log('Server is runing on port',port));
