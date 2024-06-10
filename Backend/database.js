const mongoose=require("mongoose");

const mongoURL = "mongodb+srv://ayushmongo:user9876@cluster0.vbnfhte.mongodb.net/RestaurantManagementSystem";
mongoose.connect(mongoURL);
var connection=mongoose.connection
connection.on('error',()=>{
          console.log("mongo db connection failed");
})
connection.on('connected',()=>{
          console.log("mongo db connection succesfully");
})
module.exports=mongoose;
