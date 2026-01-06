const express = require("express");
const Wishlist = require("../model/Wishlist");
const router = express.Router();

router.post("/add", async (req, res) => {
  const { productId } = req.body;
  await Wishlist.create({ productId });
  res.json({ success: true });
});

module.exports = router;
