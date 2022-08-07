const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const avlTempSchema=new Schema({
    avlTemp: [{
        type: String,
        unique: true
    }]

});

var avltempSchema=mongoose.model('avlTemplts',avlTempSchema);
module.exports=avltempSchema;
