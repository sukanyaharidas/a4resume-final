const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const authSchema=new Schema({
    fname: String,
    password: String,
    emailid: String
});

var authData=mongoose.model('authdatas', authSchema);
module.exports=authData;
