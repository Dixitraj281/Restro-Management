const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const config = require('../config/config');
const isLogin = async(req, res,next)=>{

    
    const token = req.cookies.token;
    console.log(token);

    if(!token){
        res.status(403);
        res.send("Please login first");
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
    const token = req.cookies.token;
    if(!token){
        return next();
    }
    else{
        res.redirect('/home');
    }
}
module.exports = {
    isLogin,
    isLogout
};