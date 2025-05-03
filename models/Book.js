const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    bookId: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    author: { type: String, required: true },
    numberOfPages: { type: Number },
    category: { type: String },
    publishedAt: { type: Date },
    language: { type: String },
    price: { type: Number }
});

module.exports = mongoose.model("Book", bookSchema);
