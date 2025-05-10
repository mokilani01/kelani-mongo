const mongoose = require("mongoose")


const EmployeeSchema = new mongoose.Schema({

   EmployeeID : {type:String ,required:true , unique :true},
    name : String , 
    birthYear : String , 
    nationallity : String , 
    position: String,
 })

module.exports = mongoose.model("Employee", EmployeeSchema);