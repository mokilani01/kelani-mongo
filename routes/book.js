const express = require("express");
const router = express.Router();

const Book = require("../models/Book");

// Add a new book
router.post('/', async (req, res) => {
    try {
        const newBook = new Book(req.body);
        await newBook.save();
        res.status(201).send(newBook);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all books
router.get("/", async (req, res) => {
    try {
        const books = await Book.find();
        res.send(books);
    } catch (error) {
        res.status(500).send("Error retrieving books");
    }
});

// Get book byID
router.get("/:id", async (req, res) => {
    try {
        const book = await Book.findOne({ bookId: req.params.id });
        if (!book) return res.status(404).send("Book not found");
        res.send(book);
    } catch (error) {
        res.status(500).send("Error retrieving book");
    }
});

// Update book 
router.put("/:id", async (req, res) => {
    try {
        const updatedBook = await Book.findOneAndUpdate(
            { bookId: req.params.id },
            req.body,
            { new: true } 
        );
        if (!updatedBook) return res.status(404).send("Book not found");
        res.send(updatedBook);
    } catch (error) {
        res.status(400).send("Error updating book");
    }
});

// Delete book
router.delete("/:id", async (req, res) => {
    try {
        const result = await Book.deleteOne({ bookId: req.params.id });
        if (result.deletedCount === 0) return res.status(404).send("Book not found");
        res.send({ message: "Book has been deleted" });
    } catch (error) {
        res.status(500).send("Error deleting book");
    }
});

module.exports = router;
