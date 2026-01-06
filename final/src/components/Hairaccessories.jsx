import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";
import "./Dresses.css";

function Hairaccessories() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart, addToWishlist } = useCart();
  const openProduct = (product) => {
    setSelectedProduct(product);
  };
  const closeProduct = () => {
    setSelectedProduct(null);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://street-style-shop-server.onrender.com/api/product/fetchproducts?category=hairaccessories"
        );
        setProducts(response.data.addproducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // ✅ ADD TO CART (NO SIZE)
  const handleAddToCart = () => {
    addToCart(selectedProduct, null, 1);
    closeProduct();
  };

  const handleAddToWishlist = () => {
    addToWishlist(selectedProduct);
    closeProduct();
  };

  return (
    <>
      <div className="products-container">
        {products.length > 0 ? (
          products.map((product, index) => (
            <div className="card" key={index}>
              <img
                src={`http://localhost:5500/uploads/${product.image}`}
                alt={product.name}
                width="280"
                height="300"
                onClick={() => openProduct(product)}
                style={{ cursor: "pointer" }}
              />

              <p
                className="card-title"
                onClick={() => openProduct(product)}
                style={{ cursor: "pointer" }}
              >
                {product.description}
              </p>

              <div className="card-body">
                <p className="card-text">
                  ₹{product.price}{" "}
                  {product.oldPrice && (
                    <span className="oldp">₹{product.oldPrice}</span>
                  )}
                  {product.discount && (
                    <small className="smalltext">
                      ({product.discount}%)
                    </small>
                  )}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", marginTop: "50px" }}>
            No products found
          </p>
        )}
      </div>

      {/* ✅ MODAL */}
      {selectedProduct && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="row">
              <div className="col-6">
                <img
                  src={`http://localhost:5500/uploads/${selectedProduct.image}`}
                  alt={selectedProduct.name}
                  width="300"
                />
              </div>

              <div className="col-6">
                <button className="close-btn" onClick={closeProduct}>
                  ✖
                </button>

                <h3>{selectedProduct.name}</h3>
                <p>{selectedProduct.description}</p>

                <hr />

                <div className="d-flex gap-2">
                  <h4>₹{selectedProduct.price}</h4>
                  {selectedProduct.oldPrice && (
                    <p className="oldp">
                      ₹{selectedProduct.oldPrice}
                    </p>
                  )}
                </div>

                <small>inclusive of all taxes</small>
                <hr />

                <div className="action-buttons">
                  <button
                    className="wishlist-btn"
                    onClick={handleAddToWishlist}
                  >
                    🤍 Wishlist
                  </button>

                  <button
                    className="cart-btn"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Hairaccessories;
