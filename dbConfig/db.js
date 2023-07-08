const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb://localhost:27017/quora");
//const connection = mongoose.connect("mongodb+srv://shaad72345:RoarApp123@cluster0.kn0syme.mongodb.net/RoarAppData?retryWrites=true&w=majority");

module.exports={
    connection
}