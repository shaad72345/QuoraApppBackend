
const mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator')
const userSchema= new mongoose.Schema({
    name : {type:String , required: true},
    email : {type:String , unique: true},
    password : {type:String , required: true},
    

},{
    timestamps:true
})

userSchema.plugin(uniqueValidator)

const UserModel = mongoose.model('user', userSchema);

module.exports = {UserModel}