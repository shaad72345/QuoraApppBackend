const mongoose = require("mongoose");

const commentSchema= new mongoose.Schema({
    comment : {type:String , required: true},
    postId : { type: mongoose.Schema.Types.ObjectId, ref: "post", required: true},
    userId : { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true},
    
},{
    timestamps: true,
})

const CommentModel = mongoose.model('comment', commentSchema);

module.exports = {CommentModel}