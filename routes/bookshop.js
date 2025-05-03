const express = require("express");
const router = express.Router();

const Bookshop = require("../models/Bookshop");

// Add a new bookshop
router.post("/", async (req, res) => {
    try {
        const newBookshop = new Bookshop(req.body);
        await newBookshop.save();
        res.status(201).send(newBookshop);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all bookshops
router.get("/", async (req, res) => {
    try {
        const bookshops = await Bookshop.find();
        res.send(bookshops);
    } catch (error) {
        res.status(500).send("Error retrieving bookshops");
    }
});

// Get bookshop by ID (bookshopId)
router.get("/:id", async (req, res) => {
    try {
        const bookshop = await Bookshop.findOne({ bookshopId: req.params.id });
        if (!bookshop) return res.status(404).send("Bookshop not found");
        res.send(bookshop);
    } catch (error) {
        res.status(500).send("Error finding bookshop");
    }
});

module.exports = router;
