const mongoose = require("mongoose");

const postSchema= new mongoose.Schema({
    Title : {type:String , required: true},
    description  : {type:String , required: true},
    Post_Image : {type:String},
    userId : { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true},
    
},{
    timestamps: true,
})

const PostModel = mongoose.model('post', postSchema);

module.exports = {PostModel}

