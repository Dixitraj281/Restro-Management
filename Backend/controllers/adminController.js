const { json } = require("body-parser");
const addResModel = require("../models/addResModel");
const restaurants = require("../models/addResModel");
const ordersModel = require("../models/ordersModel");
const admin = require('../models/AdminModel');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const cookie = require('cookie-parser');

// function to send mail from ayush to any user which register. in case of superadmin we will be using his email id
const sendVerifyMail= async(name, email, user_id)=>{
    try{
        const transporter = nodemailer.createTransport({
            host:'smtp.gmail.com',
            port:587,
            secure:false,
            requireTLS:true,
            auth:{
                user:'ayushmongo@gmail.com',
                pass:'nknjwpvzhhfvakll'
            }
        });
        const mailOptions = {
            from:'ayushmongo@gmail.com',
            to:email,
            subject:'For verification mail',
            html:'<p>HII '+name+', please click here to <a href="http://localhost:3000/verify?id='+user_id+'">Verify </a> your mail.</p>'
        }
        transporter.sendMail(mailOptions, function(error, info) {
            if(error){
                console.log(error);
            }
            else{
                console.log("Email has been sent",info.response);
            }
        })
    }
    catch (err) {
        console.log(err);
    }
}
// function that creates a encrypted strong password in hash form
const securePassword = async(password)=> {
    try{
        const passwordHash = await bcrypt.hash(password,10);// 10 salt value is considered as strong
        return passwordHash;

    } catch (error) {
        console.log(error.message);
    }
}
const insertAdmin = async(req, res)=>{
    try{
        const spassword = await securePassword(req.body.password);
        const admin = new ({
            first_name:req.body.fname,
            last_name:req.body.lname,
            email:req.body.email,
            mobile:req.body.mobile,
            password:spassword
        })
        const adminData = await admin.save();

        if(adminData){
            console.log("please verify your email");
            // sendVerifyMail(req.body.name, req.body.email,userData._id);
            // res.render('registration', {message:"Your registration has been successfully!!Please verify Email"});
        }
        else
        {
            console.log("registration failed");
            // res.render('registration', {message:"Your registration has been failed "});

        }

    }
    catch (error) {
        console.log(error);
    }
}
// user is on login page and want to clicks on submit button
const verifyLogin = async(req, res)=>{
    try{
        const testAdmin = req.body.email;
        const testPass = req.body.password;
        const adminData = await admin.findOne({email:testUser});
        
        if(adminData){
            // if user exist then next step is to match the password
            const passwordMatch = await bcrypt.compare(testPass, adminData.password);// it returns boolean value
            if(passwordMatch){
                if(adminData.is_varified==1){
                    // here we have to create token
                    const token = await createToken(adminData._id);
                    //send cookie to user
                    const options = {
                        //new Date(Date.now() + 3*24*60*60*1000),
                        expires: new Date(Date.now() + 2*24*60*60*1000) ,
                        httpOnly:true
                    }
                    
                    res.cookie("token", token, options);
                    res.redirect('/home');
                }
                else {
                    res.render('login',{message:"User not verified!! Please verify your email"}); 
                    await sendVerifyMail(userData.name, userData.email,userData._id);  
                }             
            }
            else{
                res.render('login',{message:"Password does not match!! Try again "})
            }
        }
        else{
            res.render('login',{message:"Username does not exist!!"});

        }
    }
    catch (error){
        console.log(error);
    }
}


const addRes = async (req, res) => {
  console.log(req.body);
  try {
    const newRes = new addResModel({
      res_name: req.body.hotelName,
      des: req.body.description,
      desImage: req.body.desUrls,
      cusines: req.body.cusines,
      address: req.body.address,
      moreInfo: req.body.moreInfo,
      foodPhotos: req.body.foodUrls,
      menuPhotos: req.body.menuUrls,
      resPhotos: req.body.resUrls,
      openTime: req.body.openTime,
      closeTime: req.body.closeTime,
      tableCap: req.body.tableCap,
    });
    const newResData = await newRes.save();
    if (newResData) {
      console.log("Data Successfully saved in database");
    } else {
      console.log("Storage Failed");
    }
  } catch (err) {
    console.log("Failed");
  }
};

const getResData = async (req, res) => {
  const resName = req.params.resname;
  try {
    const restaurant = await restaurants.findOne({ res_name: resName });
    if (restaurant) {
      res.send(restaurant);
    } else {
      res.status(404).json({ error: "Restaurant not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
const getPreviousOrders = async (req, res) => {
  console.log("previous api has been hit");
  const previousDetails = [];
  const resName = req.params.id;
  console.log(resName);
  try {
    const orders = await ordersModel.find({ res_name: resName });
    if (orders) {
      orders.forEach((order) => {
        const todaysDate = new Date();
        const orderDate = order.date;
        console.log(orderDate.getFullYear(), orderDate.getMonth(), orderDate.getDay());
        console.log(todaysDate.getFullYear(), todaysDate.getMonth(), todaysDate.getDay());
        if (
          orderDate.getFullYear() <= todaysDate.getFullYear() &&
          orderDate.getMonth() <= todaysDate.getMonth() &&
          orderDate.getDay() < todaysDate.getDay()
        ) {
          previousDetails.push(order);
        }
      });
      res.send(previousDetails);
    } else {
      throw new Error("Restraunt does not exist!");
    }
  } catch (err) {
    console.log(err);
  }
};
const getTodayOrders = async (req, res) => {
  console.log("Todays api has been hit");
  const resName = req.params.id;
  console.log(resName);
  const todayOrders = [];
  try {
    const orders = await ordersModel.find({ res_name: resName });
    if (orders) {
      orders.forEach((order) => {
        const todaysDate = new Date();
        const orderDate = order.date;
        if (
          orderDate.getFullYear() <= todaysDate.getFullYear() &&
          orderDate.getMonth() <= todaysDate.getMonth() &&
          orderDate.getDay() == todaysDate.getDay()
        ) {
          todayOrders.push(order);
        }
      });
      res.send(todayOrders);
    } else {
      throw new Error("Restraunt with this name does not exist!");
    }
  } catch (err) {
    console.log(err);
  }
};
const getFutureOrders = async (req, res) => {
  console.log("future api has been hit");
  const resName = req.params.id;
  const futureOrder = [];
  try {
    const orders = await ordersModel.find({ res_name: resName });
    if (orders) {
      orders.forEach((order) => {
        const todaysDate = new Date();
        const orderDate = order.date;
      
        if (
          orderDate.getFullYear() <= todaysDate.getFullYear() &&
          orderDate.getMonth() <= todaysDate.getMonth() &&
          orderDate.getDay() > todaysDate.getDay()
        ) {
          futureOrder.push(order);
        }
      });
      res.send(futureOrder);
    } else {
      throw new Error("Restraunt with the given details does not exist!");
    }
  } catch (err) {
    console.log(err);
  }
};
const getAllOrders = async(req, res)=>{
    const resName = req.params.id;
    const allOrders = [];
    try{
     const orders = await ordersModel.find({res_name:resName});
      if(orders){
        res.send(orders);
      }
      else
      {
        throw new Error("Restraunt with this name does not exist")
      }
      res.send(allOrders);
    }
    catch(err){
      console.log(error);
      
    }
    


}
module.exports = {
  addRes,
  getResData,
  getPreviousOrders,
  getTodayOrders,
  getFutureOrders,
  getAllOrders
};
