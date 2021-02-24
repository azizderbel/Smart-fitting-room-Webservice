require('dotenv').config();
var express = require('express');
var mongoose= require('mongoose');
const Model = require('./models/article');
const ScannedArticle = require('./models/scannedarticle.js');
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
    
app.get('/find/:id',(req,res,next)=>{
    
     
    Model.find({ref : req.params.id},function (err, data) {
    
       
         if(err) return console.error(err);
         else if (Object.keys(data).length === 0) res.send("introuvable");
         else
         {
          
          ScannedArticle.create({ref : data[0].ref, date: new Date().toLocaleDateString(),time: new Date().toLocaleTimeString()},function(err,docs){
          if(err) return console.error(err);
          res.redirect('/');
          });
          
         } 
                                                            });
});



app.listen(port,()=>console.log('Server is runing on port',port));
