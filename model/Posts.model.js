const mongoose = require("mongoose");

const postSchema= new mongoose.Schema({
    Title : {type:String , required: true},
    Post_Image : {type:String},
    description  : {type:String , required: true},
    userId : {type:String, required: true},
    createdAt :{type:Date, default:Date.now() }
})

const PostModel = mongoose.model('post', postSchema);

module.exports = {PostModel}

