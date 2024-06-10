const express = require('express');
const user_route = express();
const bodyParser = require('body-parser');
const path = require('path');
const adminController = require('../controllers/adminController');


const admin = express();
admin.use(bodyParser.json());
admin.use(bodyParser.urlencoded({extended:false}));







admin.post('/addrestraunt', adminController.addRes);// post request to handle add res feature
admin.get('/getResData/:resname',adminController.getResData);


module.exports = admin;














