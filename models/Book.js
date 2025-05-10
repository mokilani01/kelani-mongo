const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    bookId: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    author: { type: String, required: true },
    numberOfPages: { type: String }, 
    category: { type: String },
    publishedAt: { type: String },
    language: { type: String },
    price: { type: String }
});

module.exports = mongoose.model("Book", bookSchema);

