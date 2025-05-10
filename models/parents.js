const mongoose = require("mongoose")


const parentsSchema = new mongoose.Schema({
     parentsID : {type:String ,required:true , unique :true},
    studentname:String,
     perantsName:String,
     phonenumber:String,
     Email:String,
     Address: String,


 })

module.exports = mongoose.model("parents", parentsSchema);