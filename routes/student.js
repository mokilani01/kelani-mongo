const express = require("express");

const router = express.Router();

// Load the Student model
const Student = require("../models/student");

// Add a new student
router.post("/", async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(201).send(student);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all students
router.get("/", async (req, res) => {
    try {
        const students = await Student.find();
        res.send(students);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Get student by ID
router.get("/:id", async (req, res) => {
    try {
        const student = await Student.findOne({ studentID: req.params.id });
        if (!student) return res.status(404).send("Student not found");
        res.send(student);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update student information
router.put("/:id", async (req, res) => {
    try {
        const student = await Student.findOneAndUpdate(
            { studentID: req.params.id },
            req.body,
            { new: true }
        );
        if (!student) return res.status(404).send("Student not found");
        res.send(student);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Delete student
router.delete("/:id", async (req, res) => {
    try {
        const result = await Student.deleteOne({ studentID: req.params.id });
        if (result.deletedCount === 0) {
            return res.status(404).send("Student not found");
        }
        res.send({ message: "Student has been deleted" });
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;

