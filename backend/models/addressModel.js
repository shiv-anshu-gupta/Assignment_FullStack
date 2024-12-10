const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  houseNo: String,
  road: String,
  category: String, // e.g., Home, Office, etc.
  coordinates: {
    lat: Number,
    lng: Number,
  },
});

module.exports = mongoose.model("Address", addressSchema);
