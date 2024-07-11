const express = require('express');
const user_route = express();
const bodyParser = require('body-parser');
const path = require('path');
const adminController = require('../controllers/adminController');
const session = require('express-session');
const config = require('../configs/config');
const auth = require('../middleware/auth');
const cookieParser = require('cookie-parser');



const admin = express();
admin.use(bodyParser.json());
admin.use(bodyParser.urlencoded({extended:false}));
admin.use(cookieParser());






admin.post("/login",
    auth.isLogout, 
    adminController.verifyLogin);// post request consist of admin credentils to verify its login

admin.post('/signup',
    auth.isLogout,
    adminController.insertAdmin);// post request consist of new admin data which will be getting stored in db

admin.get('/verify?:id',adminController.verifyMail);// once user is signed up he gets this functinality to verify itself for better security

admin.post('/addrestraunt', auth.isLogin,adminController.addRes);// post request to handle add res feature

admin.get('/getResData/:resname',adminController.getResData);// get request to handle get specific restraunt data

admin.get('/getpreviousorders/:id',auth.isLogin,adminController.getPreviousOrders);//get request to get all the previous orders of a particular res according to todays date

admin.get('/gettodaysorders/:id',auth.isLogin ,adminController.getTodayOrders);//get request to get all the todays orders of a particular res according to todays date

admin.get('/getfutureorders/:id',auth.isLogin,adminController.getFutureOrders);//get request to get all the future orders of a particular res according to todays date

admin.get('/getallorders/:resname' ,adminController.getAllOrders);//get request to get  all orders from of a particular restraunt

module.exports = admin;














