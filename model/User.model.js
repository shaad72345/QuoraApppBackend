
const mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator')
const userSchema= new mongoose.Schema({
    name : {type:String , required: true},
    username : {type:String , unique: true},
    password : {type:String , required: true},
    createdAt : {type:Date, default:Date.now()}

})

userSchema.plugin(uniqueValidator)

const UserModel = mongoose.model('user', userSchema);

module.exports = {UserModel}