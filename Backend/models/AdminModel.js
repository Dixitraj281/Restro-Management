const mongoose = require("mongoose");
const AdminSchema = new mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    email:{
        type:String, 
        require:true
    },
    mobile:{
        type:String,
        require:true
    },
    password:{
        type:String, 
        required:true
    },
    restOwned:{
        type:String,
        default:"NA"
    },
    is_varified:{
        type:Number,
        default:0
    }

});

module.exports = mongoose.model("Admin", AdminSchema);