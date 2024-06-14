
const mongoose = require("mongoose");
const resSchema = new mongoose.Schema({
    res_name:{
        type:String
    },
    des:{
        type:String, 
    },
    desImage:{
        type:Array
    },
    cusines:{
        type:Array
    },
    address:{
        type:String
    },
    moreInfo:{
        type:Array
    },
    foodPhotos:{
        type:Array
    },
    menuPhotos:{
        type:Array
    },
    resPhotos:{
        type:Array
    },
    openTime:{
        type:String
    },
    closeTime:{
        type:String
    },
    tableCap:{
        type:Number
    }
});

module.exports = mongoose.model("Restaurant", resSchema);