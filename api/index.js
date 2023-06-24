const express = require("express");
const app=express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./Routes/auth");
const userRoute = require("./Routes/users");
const movieRoute = require("./Routes/movies");
const listRoute = require("./Routes/lists");
const cors = require("cors");
const  cookieParser= require("cookie-parser");

dotenv.config();

main().catch(err => console.log(err));

async function main(){
  await mongoose.connect(process.env.MONGO_URL).then(()=>console.log("DB Connection Success"));
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.use(cors())
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth",authRoute);
app.use("/api/users", userRoute); 
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);

app.listen(8800||"https://netflix-ui-k2u6.onrender.com", ()=>{
    console.log("Backend Server is running");    
})  
