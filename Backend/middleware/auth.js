const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const config = require('../configs/config');
const isLogin = async(req, res,next)=>{

    console.log("islogin middleware hit");
    
    const token = req.cookies.token;
    console.log(token);

    if(!token){
        res.status(403);
        res.send({
            'status':'Login First to get the data',
            'route':'http://localhost:3000/adminlogin'
           });
        return;// it is important to write return statement as it will give error
    }
    try{
            const decode = await jwt.verify(token, config.sessionSecret);
            next();
    }
    catch (error) {
            console.log(error);
            res.status(401).send('Invalid token');
    }
    

}
const isLogout = (req, res, next)=>{
    console.log("isLogout middleware hit");
    const token = req.cookies.token;
    console.log(token);
    if(!token){
        console.log("inside !token");
        return next();
    }
    else{
        console.log("outside token");
       res.send({
        'status':'User is already login',
        'route':'http://localhost:3000/admin'
       });
    }
}
module.exports = {
    isLogin,
    isLogout
};