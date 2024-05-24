const mongoose=require("mongoose");
const util = require('util'); // Import the util module

const mongoURL = "mongodb+srv://ayushmongo:user9876@cluster0.vbnfhte.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(mongoURL);
var connection=mongoose.connection
connection.on('error',()=>{
          console.log("mongo db connection failed");
})
connection.on('connected',()=>{
          console.log("mongo db connection succesfully");
})
module.exports=mongoose;
// const mongoose = require("mongoose");

// // MongoDB connection URL
// const mongoURL = "mongodb+srv://ayushmongo:user9876@cluster0.vbnfhte.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Connect to MongoDB
// mongoose.connect(mongoURL, {
//   // Use the new Server Discover and Monitoring engine
//   useUnifiedTopology: true,
//   // Parse connection strings using the new URL parser
//   useNewUrlParser: true,
//   // Use the new connection management engine
//   useCreateIndex: true,
//   // Use the new topology engine
//   useFindAndModify: false
// });

// // Get the default connection
// const connection = mongoose.connection;

// // Event listeners for MongoDB connection
// connection.on('error', (error) => {
//   console.error('MongoDB connection failed:', error);
// });

// connection.on('connected', () => {
//   console.log('MongoDB connection successful');
// });

// // Export mongoose for use in other modules
// module.exports = mongoose;
