const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  category: String,
  price: Number,
  oldPrice: Number,
  stock: Number,
  discount: Number,
  size: String,
  rating: Number,
  location: String,
  image: String,
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);
