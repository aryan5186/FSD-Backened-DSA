const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();

// FIX 1: It's `app.use`, not `app.userInfo`
app.use(express.json()); 

app.use(cors());
dotenv.config();

// FIX 2: Typo in `process.env.MONGODB_URL` (you had `MONOGODB_URL`)
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log("Error in connection:", err));

const BookSchema=new mongoose.Schema({
    title: String,
    author: String,
    data: String,
    image: String,
})
//Deign the Book Model
const Book=mongoose.model("MyBook",BookSchema)

app.post("/books",async(req,res)=>{
    try{
        const newbook=new Book(req.body)
        await newbook.save()
        res.status(200).send("Book Added")
    }
    catch(err){
    res.status(500).send("Server Error")
    }
})
app.get("/books",async(req,res)=>{
    try{
       const Book=await Book.find()
       res.json(Books);
    }
    catch(err){
      console.log(err)
      res.status(500).send("server error")
    }
})
app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
