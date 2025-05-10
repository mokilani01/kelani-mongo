const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    studentID: {
        type: String,
        required: true,
        unique: true
    },
    name: String,
    age: Number,
    major: String
   
});

module.exports = mongoose.model("Student", studentSchema);
