const express = require("express");
const Order = require("../model/Order");

const router = express.Router();

/* ======================
   CREATE ORDER
====================== */
router.post("/", async (req, res) => {
  try {
    const { cart, address, total } = req.body;

    if (!cart || !address || !total) {
      return res.status(400).json({ message: "Missing order data" });
    }

    const products = cart.map((item) => ({
      productId: item.productId._id,
      name: item.productId.name,
      price: item.productId.price,
      quantity: item.quantity,
      size: item.size,
      image: item.productId.image,
    }));

    const order = new Order({
      products,
      address,
      totalAmount: total,
    });

    await order.save();

    res.status(201).json({
      success: true,
      order,
    });
  } catch (error) {
    console.error("Order error:", error);
    res.status(500).json({ message: "Order creation failed" });
  }
});

/* ======================
   GET ALL ORDERS
====================== */
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch orders" });
  }
});

module.exports = router;
