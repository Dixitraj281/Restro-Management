const express = require('express');
const DB = require('./database');
const app = express();

const cors = require('cors');
const userRoute = require('./routes/userRoute');
const corsOptions = {
    origin: 'http://localhost:3000',//(https://your-client-app.com)
    optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use('/',userRoute);//user route



app.listen(4500,()=>{
    console.log("Hey server is listening to port 4500");
})