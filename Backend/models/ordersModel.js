const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    userName:{
        type:String
    },
    res_name:{
        type:String
    },
    mobNo:{
        type:String
    },
    numOfGuest:{
        type:Number
    },
    meal:{
        type:String
    },
    timing:{
        type:String
    },
    applicableOffer:{
        type:String
    },
    date:{
        type:Date
    }
});
module.exports = mongoose.model("order",orderSchema);