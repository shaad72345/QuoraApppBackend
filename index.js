const express = require("express");
const{connection} = require("./dbConfig/db");
const cors= require("cors");
const {userRouter}  = require("./routes/user.routes");
const {postRouter} = require("./routes/post.routes");
const {authentication} = require("./middleware/authentication")
const {commentRouter} = require('./routes/comment.routes')

const app = express();

const PORT = 8080;
app.use(express.json());
app.get("/", (req,res)=>{
    res.send("Home Page")
})
app.use(cors());
app.use("/user", userRouter);
app.use(authentication);
app.use("/posts", postRouter);
app.use("/comment", commentRouter);
app.listen(PORT, async()=>{
    try{
        await connection;
        console.log("db is connected")
    }
    catch(error){
        console.log("Error in connecting db")
    }

    console.log(`listening on port ${PORT}`);
})