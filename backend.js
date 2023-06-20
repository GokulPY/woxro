const express = require("express");

const app = express();

const Woxrodata = require("./module/schema")

const cors = require("cors");

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Woxro_Bank_Data")
.then(()=>{console.log("DB is Connected")})
.catch((err)=>{console.log("DB is Not Connected"+err)})

app.use(cors());
app.use(express.json());
app.post("/createdata",async(req,res)=>{
    const user = new Woxrodata({
    ...req.body
   
    })
    const saveuser = await user.save()
    res.json(saveuser)
})

app.get("/viewdata", async (req, res) => {
    try {
      const users = await Woxrodata.find();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to retrieve user data" });
    }
  });
  
app.listen(7000,()=>{console.log("Running Port 7000")})