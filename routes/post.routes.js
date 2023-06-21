const {Router} = require("express")

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config();

const {PostModel} = require("../model/Posts.model");

const postRouter = Router();

// postRouter.use((req,res,next)=>{
// console.log("i am middleware");
// next();
// })
postRouter.get("/",  async(req,res)=>{
    const notes = await PostModel.find().sort({createdAt:-1});
    console.log(notes)
    res.send(notes);
})
postRouter.get("/my",  async(req,res)=>{
    const notes = await PostModel.find({userId:req.body.userId}).sort({createdAt:-1});
    res.send(notes);
})

postRouter.post("/create",  async(req,res)=>{
    const {Title,Post_Image,description,userId} = req.body;
    const note = new PostModel({
        Title, 
        Post_Image,
        description,
        userId
    });

    try {
        await note.save();
        res.json({msg:"Your post has Uploaded Succesfully..."});
    } catch (error) {
        res.send("Something went wrong");
    }

})


postRouter.delete("/delete/:noteId", async(req,res)=>{
      const {noteId} = req.params
      const deleteNote =await PostModel.findOneAndDelete({_id:noteId});
 if(deleteNote){
    res.send("Deleted")
 }                                               ///////////, userId:req.body.userId
 else{
    res.send("Couldn't delete");
 }
 
    //   res.send("deleted" + noteId);
})


postRouter.patch("/edit/:noteId", async(req,res)=>{
    const {noteId} = req.params
    const EditNote =await PostModel.findOneAndUpdate({_id:noteId, userId:req.body.userId},{...req.body});

if(EditNote){
  res.send("Edited")
}
else{
  res.send("Couldn't Edit");

   
}
})



module.exports = {
    postRouter
}