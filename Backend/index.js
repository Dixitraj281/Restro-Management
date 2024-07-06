const express = require('express');

const app = express();
const DB = require('./database');
const cors = require('cors');
const userRoute = require('./routes/userRoute');
const adminRoute = require('./routes/adminRoute');
const cookieParser = require('cookie-parser');
const corsOptions = {
    origin: 'http://localhost:3000',//(https://your-client-app.com)
    credentials:true
};
app.use(cors(corsOptions));
app.use(cookieParser());


app.use('/',userRoute);//user route
app.use('/admin',adminRoute);



app.listen(4500,()=>{
    console.log("Hey server is listening to port 4500");
})