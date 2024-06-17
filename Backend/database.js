const mongoose=require("mongoose");

const mongoURL = "mongodb://localhost:27017/RestaurantManagementSystem";
mongoose.connect(mongoURL);
var connection=mongoose.connection
connection.on('error',()=>{
          console.log("mongo db connection failed");
})
connection.on('connected',()=>{
          console.log("mongo db connection succesfully");
})
module.exports=mongoose;
