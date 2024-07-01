const express = require('express');
const user_route = express();
const bodyParser = require('body-parser');
const path = require('path');
const adminController = require('../controllers/adminController');


const admin = express();
admin.use(bodyParser.json());
admin.use(bodyParser.urlencoded({extended:false}));







admin.post('/addrestraunt', adminController.addRes);// post request to handle add res feature
admin.get('/getResData/:resname',adminController.getResData);// get request to handle get specific restraunt data
admin.get('/getpreviousorders/:id*',adminController.getPreviousOrders);//get request to get all the previous orders of a particular res according to todays date
admin.get('/gettodaysorders/:id*', adminController.getTodayOrders);//get request to get all the todays orders of a particular res according to todays date
admin.get('/getfutureorders/:id*',adminController.getFutureOrders);//get request to get all the future orders of a particular res according to todays date
admin.get('/getallorders/:resname', adminController.getAllOrders);


module.exports = admin;














