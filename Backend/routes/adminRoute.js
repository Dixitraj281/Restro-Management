const express = require('express');
const user_route = express();
const bodyParser = require('body-parser');
const path = require('path');

const admin = express();


admin.use('/',(req, res)=>{
    res.send("hey you requested for login page");
});
module.exports = admin;













