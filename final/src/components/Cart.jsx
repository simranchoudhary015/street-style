
import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import "./Cart.css";
import axios from "axios"; // ✅ ADDED

const Cart = () => {
  const { cart = [], addToCart, removeFromCart } = useCart();

  const [address, setAddress] = useState({
    name: "",
    phone: "",
    pincode: "",
    addressLine: "",
    city: "",
    state: "",
  });

  const handleChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  const isAddressValid = Object.values(address).every(
    (v) => v.trim() !== ""
  );

  const total = cart.reduce((sum, item) => {
    if (!item.productId) return sum;
    return sum + item.productId.price * item.quantity;
  }, 0);

  // ✅ ADDED: checkout handler INSIDE component
  const handleCheckout = async () => {
    try {
      const payload = {
        cart,
        address,
        total,
      };

      console.log("ORDER PAYLOAD 👉", payload);

      await axios.post(
        "https://street-style-shop-server.onrender.com/api/orders",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      alert("Order placed successfully!");
    } catch (err) {
      console.error(
        "ORDER FAILED 👉",
        err.response?.data || err.message
      );
      alert("Order failed");
    }
  };

  if (!cart.length) {
    return (
      <div className="container cart-page">
        <h2>Shopping Cart</h2>
        <p>Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="container cart-page">
      <h2 className="cart-title">Shopping Cart</h2>

      <div className="cart-layout">
        {/* LEFT SIDE – PRODUCTS */}
        <div className="cart-left">
          {cart.map((item) => {
            if (!item.productId) return null;

            return (
              <div className="cart-item" key={item._id}>
                <img
                  src={`http://localhost:5500/uploads/${item.productId.image}`}
                  alt={item.productId.name}
                  className="cart-img"
                />

                <div className="cart-details">
                  <h5>{item.productId.name}</h5>

                  <p className="cart-size">
                    Size: <strong>{item.size}</strong>
                  </p>

                  <p className="price">₹{item.productId.price}</p>

                  <div className="qty">
                    <button
                      onClick={() =>
                        addToCart(item.productId, item.size, -1)
                      }
                      disabled={item.quantity <= 1}
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        addToCart(item.productId, item.size, 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  className="remove"
                  onClick={() => removeFromCart(item._id)}
                >
                  ✕
                </button>
              </div>
            );
          })}
        </div>

        {/* RIGHT SIDE – ADDRESS + SUMMARY */}
        <div className="cart-right">
          {/* ADDRESS FORM */}
          <div className="address-box">
            <h4>Delivery Address</h4>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={address.name}
              onChange={handleChange}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={address.phone}
              onChange={handleChange}
            />

            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              value={address.pincode}
              onChange={handleChange}
            />

            <textarea
              name="addressLine"
              placeholder="House no, Street, Area"
              value={address.addressLine}
              onChange={handleChange}
            />

            <div className="address-row">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={address.city}
                onChange={handleChange}
              />

              <input
                type="text"
                name="state"
                placeholder="State"
                value={address.state}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* ORDER SUMMARY */}
          <div className="summary-box">
            <h4>Order Summary</h4>

            <div className="summary-row">
              <span>Total Items</span>
              <span>
                {cart.reduce((sum, i) => sum + i.quantity, 0)}
              </span>
            </div>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{total}</span>
            </div>

            <div className="summary-row total">
              <strong>Total</strong>
              <strong>₹{total}</strong>
            </div>

            <button
              className="checkout-btn"
              disabled={!isAddressValid}
              onClick={handleCheckout} // ✅ UPDATED
            >
              Proceed to Checkout
            </button>

            {!isAddressValid && (
              <p className="address-warning">
                Please fill address details
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
