const mongoose = require("mongoose");

const bookshopSchema = new mongoose.Schema({
    bookshopId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    location: { type: String, required: true },
    city: { type: String },
    phoneNumber: { type: String },
    numberOfBooks: { type: Number, default: 0 },
    establishedAt: { type: Date }
});

module.exports = mongoose.model("Bookshop", bookshopSchema);
