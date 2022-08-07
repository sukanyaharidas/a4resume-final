const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const tempSchema=new Schema({
    tempid: [],
    userid: String
});

var TempSchema=mongoose.model('tempDatas',tempSchema);
module.exports=TempSchema;
