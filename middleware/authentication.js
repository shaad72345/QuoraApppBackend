const jwt = require("jsonwebtoken");
require("dotenv").config();


const authentication = (req,res, next)=>{

    if(!req.headers.authorization){
        return res.send("please login again");
    }

    const token = req.headers.authorization.split(" ")[1];
   
    jwt.verify(token, process.env.JWT_SECRET, function(err,decode){
        if(err){
            res.send("please login");

        }
        else{
            req.body.userId = decode.userId;
            next();
        }
    })
}

module.exports = {
    authentication
}