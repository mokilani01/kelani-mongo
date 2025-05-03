const express=require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app=express();
require("dotenv").config()
app.use(bodyParser.json());

mongoose.connect(process.env.mongoos_uri,{
   

}).then(() => console.log("MongoDB connected"))
.catch((err) => console.error("Connection error:", err));






const authorRoutes = require("./routes/author")
const BOOKRoutes = require("./routes/book")
const BookshopRoutes = require("./routes/bookshop")
app.use('/author', authorRoutes) 
app.use('/book',BOOKRoutes)
 app.use('/bookshop',BookshopRoutes)


 const PORT=process.env.PORT||5000
 app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})