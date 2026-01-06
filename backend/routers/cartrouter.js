const express = require("express");
const router = express.Router();
const Cart = require("../model/Cart"); // ✅ path now works

// ADD TO CART
router.post("/add", async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    const existingItem = await Cart.findOne({ userId, productId });

    if (existingItem) {
      existingItem.quantity += quantity || 1;
      await existingItem.save();
      return res.json(existingItem);
    }

    const newCartItem = new Cart({
      userId,
      productId,
      quantity: quantity || 1,
    });

    await newCartItem.save();
    res.status(201).json(newCartItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET CART ITEMS
router.get("/:userId", async (req, res) => {
  try {
    const cartItems = await Cart.find({ userId: req.params.userId })
      .populate("productId");

    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// REMOVE ITEM
router.delete("/:id", async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.json({ message: "Item removed from cart" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// ADD / UPDATE CART
router.post("/add", async (req, res) => {
try {
const { userId, productId, quantity } = req.body;


const item = await Cart.findOne({ userId, productId });


if (item) {
item.quantity += quantity;
if (item.quantity < 1) item.quantity = 1;
await item.save();
return res.json(item);
}


const newItem = new Cart({ userId, productId, quantity });
await newItem.save();
res.status(201).json(newItem);
} catch (err) {
res.status(500).json({ message: err.message });
}
});


// GET CART
router.get("/:userId", async (req, res) => {
const cart = await Cart.find({ userId: req.params.userId })
.populate("productId");
res.json(cart);
});


// DELETE
router.delete("/:id", async (req, res) => {
await Cart.findByIdAndDelete(req.params.id);
res.json({ message: "Removed" });
});

module.exports = router;

