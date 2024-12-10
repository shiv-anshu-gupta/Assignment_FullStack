const express = require("express");
const Address = require("../models/addressModel");

const router = express.Router();

// Get all addresses
router.get("/", async (req, res) => {
  try {
    const addresses = await Address.find();
    res.json(addresses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add a new address
router.post("/", async (req, res) => {
  try {
    const newAddress = new Address(req.body);
    const savedAddress = await newAddress.save();
    res.json(savedAddress);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update an address
router.put("/:id", async (req, res) => {
  try {
    const updatedAddress = await Address.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedAddress);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete an address
router.delete("/:id", async (req, res) => {
  try {
    await Address.findByIdAndDelete(req.params.id);
    res.json({ message: "Address deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
