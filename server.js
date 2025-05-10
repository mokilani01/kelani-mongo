const express=require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app=express();
require("dotenv").config()
app.use(bodyParser.json());

mongoose.connect(process.env.mongoos_uri,{
   

}).then(() => console.log("MongoDB connected"))
.catch((err) => console.error("Connection error:", err));






const teacherRoutes = require("./routes/teacher")
const BOOKRoutes = require("./routes/book")
const studentRoutes = require("./routes/student")
const parentsRoutes = require("./routes/Parents.js")
const EmployeeRoutes = require("./routes/employee.js")
app.use('/teacher', teacherRoutes) 
app.use('/book',BOOKRoutes)
 app.use('/student',studentRoutes)
app.use('/parents', parentsRoutes) 
app.use('/Employee', EmployeeRoutes)

 const PORT=process.env.PORT||5000
 app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})