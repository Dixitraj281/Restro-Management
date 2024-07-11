const express = require('express');
const user_route = express();
const bodyParser = require('body-parser');
const path = require('path');
const session = require('session');
const cookieParser = require('cookie-parser');
const userController = require('../controllers/userController');




user_route.use(cookieParser());
user_route.use(bodyParser.json());
user_route.use(bodyParser.urlencoded({extended:false}));

user_route.post('/register',userController.insertUser);// api to handle register
user_route.post('/login', userController.verifyLogin);
user_route.get('/home',userController.homeupload);
user_route.post('/booktable/*',userController.bookTable);
user_route.get('/getAllRes',userController.allRes);



module.exports = user_route;




