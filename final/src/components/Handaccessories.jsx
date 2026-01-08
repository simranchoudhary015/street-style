import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";
import "./Dresses.css";

function Handaccessories() {
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
          "https://street-style-shop-server.onrender.com/api/product/fetchproducts?category=handaccessories"
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
            <div className="card sell" key={index}>
              <img
                src={`https://street-style-shop-server.onrender.com/uploads/${product.image}`}
                alt={product.name}
                className="pimg"
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
          <div className="modal-content model">
            <div className="row divide">
              <div className="imgarea col-sm-3 col-lg-6">
                <img
                  src={`https://street-style-shop-server.onrender.com/uploads/${selectedProduct.image}`}
                  alt={selectedProduct.name}
                  width="300"
                />
              </div>

              <div className="writenarea col-sm-3 col-lg-6">
                <button className="close-btn cancelb" onClick={closeProduct}>
                  ✖
                </button>

                <h3>{selectedProduct.name}</h3>
                <p>{selectedProduct.description}</p>

                <hr />

                <div className="p d-flex gap-2">
                  <h4>₹{selectedProduct.price}</h4>
                  {selectedProduct.oldPrice && (
                    <p className="oldp">
                      ₹{selectedProduct.oldPrice}
                    </p>
                  )}
                  <small className="smalltext">
                    ({selectedProduct.discount}%)
                  </small>
                </div>
              <div className="tax">
                <small>inclusive of all taxes</small>
                <hr />
               </div>
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

export default Handaccessories;
