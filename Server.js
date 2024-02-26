const express=require('express')
const app=express();
const connectDb = require('./config/db')
connectDb();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
require("./models/Users")
require("./models/GreenForm")

const AuthRouter=require("./Routes/Auth");
app.use("/Auth",AuthRouter)

app.listen("5000",()=>{
    console.log("Server is running on port 5000");
})