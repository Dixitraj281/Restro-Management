const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
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
    is_admin:{
        type:Number,
        require:true
    }
});

module.exports = mongoose.model("user", userSchema);