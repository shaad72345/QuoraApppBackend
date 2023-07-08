const {Router} = require("express")
const {CommentModel}  = require("../model/Comment.model")


const commentRouter= Router();
commentRouter.get("/", (req,res)=>{
    res.send("Comments")
})

commentRouter.get("/:postID", async(req,res)=>{
    const {postID} = req.params;
    const comments = await CommentModel.find({postId:postID}).sort({createdAt:-1}).populate(["userId"]);
    console.log(comments);
        res.send(comments) 
})

commentRouter.post("/add/:postId", async(req,res)=>{
    const {postId} = req.params;
    // console.log(req.body);
    const {comment,userId}  = req.body;

    const newcomments = new CommentModel({
        comment,
        postId,
        userId
    })
    try {
         await newcomments.save();
         res.send({message:"Comment Added Successfully"});
    } catch (error) {
        res.send({message:error});
    }
  
})


module.exports ={commentRouter}