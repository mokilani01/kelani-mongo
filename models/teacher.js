const mongoose = require("mongoose")


const teacherSchema = new mongoose.Schema({

    teacherID : {type:String ,required:true , unique :true},
    name : String , 
    birthYear : Number , 
    nationallity : String , 
 })

module.exports = mongoose.model("teacher", teacherSchema);