const mongoose=require("mongoose");
const mongoURL = "mongodb+srv://ayushmongo:user9876@cluster0.vbnfhte.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(mongoURL,{useUnifiedTopology:true , useNewUrlParser:true} );
var connection=mongoose.connection
connection.on('error',()=>{
          console.log("mongo db connection failed");
})
connection.on('connected',()=>{
          console.log("mongo db connection succesfully");
})
module.exports=mongoose;