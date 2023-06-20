const mongoose = require("mongoose");

const woxrodata = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
}) 
module.exports=mongoose.model("Woxro_Bank_User_Data",woxrodata)