const {Router} = require("express")
const {UserModel} = require("../model/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config();

const userRouter= Router();


userRouter.post("/signup", async(req,res)=>{
    const {name,email,password} = req.body;
    console.log(req.body);
    bcrypt.hash(password,5,async function(err, hash){
        if(err){
            res.send("Somthing went wrong,in password hashing");
         
        }
        const user = new UserModel({
            name,
            email,
            password:hash
        })
        try {
             await user.save();
             res.json({message:"Signup successful"});
        } catch (error) {
               res.json({msg:'Signup failed',error:error.message});
        }
       
        // res.send("signup succesful");
    })


   
})

userRouter.post("/login", async(req,res)=>{
      const {email, password} = req.body;
      const user = await UserModel.findOne({email});
       if(user){
     const hash = user.password;
      bcrypt.compare(password,hash, function(err, result){
        if(err){
            res.send("something went wrong in comparing login password")
        }
                      ////////process.env.JWT_SECRET
        if(result){
            const token = jwt.sign({userId : user._id, Name:user.name}, process.env.JWT_SECRET);
            res.json({message : "Login successful", name:user.name,token});
        }
        else{
            res.json({message:"Wrong Credential"});
        }
      })
    }
    else{
        res.json({message:"Invalid Credentails"})
    }

//    res.send(user);
})

module.exports = {
    userRouter
}