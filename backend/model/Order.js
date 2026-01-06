const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    paymentId: {
      type: String,
      default: "COD",
    },
    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        name: String,
        price: Number,
        quantity: Number,
        size: String,
        image: String,
      },
    ],
    address: {
      name: String,
      phone: String,
      pincode: String,
      addressLine: String,
      city: String,
      state: String,
    },
    totalAmount: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
