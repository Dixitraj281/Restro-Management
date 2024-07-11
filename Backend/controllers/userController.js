const User = require('../models/UserModel');
const Order = require('../models/ordersModel');
const Res = require('../models/addResModel');
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
const insertUser = async(req, res)=>{
    try{
        const spassword = await securePassword(req.body.password);
        const user = new User({
            first_name:req.body.fname,
            last_name:req.body.lname,
            email:req.body.email,
            mobile:req.body.mobile,
            password:spassword,
            is_admin:0,
        })
        const userData = await user.save();

        if(userData){
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
        const testUser = req.body.email;
        const testPass = req.body.password;
        const userData = await User.findOne({email:testUser});
        
        if(userData){
            // if user exist then next step is to match the password
            const passwordMatch = await bcrypt.compare(testPass, userData.password);// it returns boolean value
            if(passwordMatch){
                if(userData.is_varified==1){
                    // here we have to create token
                    const token = await createToken(userData._id);
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
const homeupload = (req, res)=>{
   res.send("hello how are you?");

}
const bookTable = async (req, res)=>{
    console.log("bookTable api has been hit");
    const details = req.body;// here we have recieved the data
    // next step is to send this data to backend and store it
    console.log(details);
    try{
    const newOrder = new Order({
        userName: details.userName,
        res_name: details.name,
        mobNo: details.phone,
        noOfGuest: details.guests ,
        meal: details.meal,
        timing:details.time ,
        applicableOffer: details.offer,
        date:details.date
    });
    const orderData = await newOrder.save();
    if(orderData){
        res.status(200);
        console.log("ordered successfully");
        res.end();
    }
    else {
        res.status(500);
        throw new Error("registration Failed");
    }
    }catch(err){
        console.log(err);

    }
}
const allRes = async(req, res)=>{
    console.log("res api has been hit");
    try{
        const response = await Res.find();
        if(response){
            res.send(response);
        }
        else{
            throw new Error("Collection with this name does not exist in the mongodb");
        }

    }
    catch(err){
        console.log("HTTP server error! unable to connect to mongodb");
    }
      



}


module.exports = {
    insertUser,
    homeupload,
    bookTable,
    allRes,
    verifyLogin
}