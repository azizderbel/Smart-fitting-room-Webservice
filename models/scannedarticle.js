const mongoose = require('mongoose');
let scannedarticleSchema = new mongoose.Schema({
    "ref":String,
    "date":String,
    "time":String
    },
    {collection: "Scanned"}
    );
var ScannedArticle = module.exports = mongoose.model('ScannedArticle',scannedarticleSchema);
