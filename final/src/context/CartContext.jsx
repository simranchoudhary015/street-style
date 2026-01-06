import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // ✅ ADD TO CART (SIZE OPTIONAL)
  const addToCart = (product, size = null, qty = 1) => {
    const hasSizes =
      Array.isArray(product?.sizes) && product.sizes.length > 0;

    // ❌ Only block when product HAS sizes
    if (hasSizes && !size) {
      alert("Please select size");
      return;
    }

    setCart((prev) => {
      const existing = prev.find(
        (i) =>
          i.productId._id === product._id &&
          i.size === size
      );

      if (existing) {
        return prev.map((i) =>
          i.productId._id === product._id &&
          i.size === size
            ? { ...i, quantity: i.quantity + qty }
            : i
        );
      }

      return [
        ...prev,
        {
          _id: Date.now(),
          productId: product,
          quantity: qty,
          size: size, // null for bags/jewellery
        },
      ];
    });
  };

  // ✅ REMOVE
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((i) => i._id !== id));
  };

  // ✅ WISHLIST
  const addToWishlist = (product) => {
    setWishlist((prev) =>
      prev.find((i) => i._id === product._id)
        ? prev
        : [...prev, product]
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        addToWishlist,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
