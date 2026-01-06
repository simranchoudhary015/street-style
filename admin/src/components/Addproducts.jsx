
import React, { useState, useRef ,useEffect} from "react";
import "./Addproducts.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Addproducts() {
  const formRef = useRef(null);
  const navigate = useNavigate();

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const fileInputRef = useRef();

  // Handle submit – send full product + image
 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const formData = new FormData(formRef.current);  

    const response = await axios.post(
      "http://localhost:5500/api/product/add-product",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    alert("Product added successfully!");
    navigate("/products");
  } catch (error) {
    alert("Error: " + error);
  }
};

  const handleBoxClick = () => fileInputRef.current.click();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};


  return (
    <>
      <form ref={formRef} onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="product-form mt-5">
          <div className="form-group">
            <label htmlFor="name">Product Name</label>
            <input type="text" name="name" className="input" required />
          </div>

          <div className="form-group">
            <label htmlFor="description">Product Description</label>
            <textarea name="description" className="textarea" required></textarea>
          </div>

          <div className="grid">
            <div className="form-group">
              <label htmlFor="category">Product Category</label>
              <select name="category" onChange={handleChange} className="input">
                <option >Select category</option>
                <option value="dresses">Dresses</option>
                <option value="croptop">Croptop</option>
                <option value="shirts">Shirts & tshirts</option>
                <option value="jumpsuit">jumpsuit</option>
                <option value="bottamwear">Bottamwear</option>
                <option value="heels">Heels</option>
                <option value="shoes">Shoes</option>
                <option value="sneaker">Sneaker</option>
                <option value="slipers">Slipers</option>
                <option value="bags">Bags</option>
                <option value="neckpiecesEaring">NeckpiecesEaring</option>
                <option value="handaccessories">Handaccessories</option>
                <option value="hairaccessories">Hairaccessories</option>
                <option value="wintercollection">Wintercollection</option>
                <option value="leathercollection">Leathercollection</option>
                <option value="hoodies">Hoodies</option>
                <option value="cordset">Cordset</option>
                <option value="shorts">Shorts</option>
                <option value="bodycondress">Bodycondress</option>
                <option value="printedcollection">Printedcollection</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="price">Product Price</label>
              <input type="number" name="price" className="input" required />
            </div>

            <div className="form-group">
              <label htmlFor="oldprice">Product Old Price</label>
              <input type="number" name="oldPrice" className="input" />
            </div>

            <div className="form-group">
              <label htmlFor="stock">Product Stock</label>
              <input type="number" name="stock" className="input" />
            </div>

            <div className="form-group">
              <label htmlFor="discount">Product Discount (%)</label>
              <input type="number" name="discount" className="input" />
            </div>

            <div className="form-group">
              <label htmlFor="size">Product Size</label>
              <input type="text" name="size" className="input" />
            </div>

            <div className="form-group">
              <label htmlFor="rating">Rating</label>
              <input type="number" name="rating" className="input" min="1" max="5" />
            </div>
          </div>
        </div>

        <label htmlFor="location">Location</label>
        <select className="input" name="location">
          <option value="">Select...</option>
          <option>Hoshiarpur</option>
          <option>Delhi</option>
          <option>Mumbai</option>
          <option>Bangalore</option>
        </select>

        <div className="media-section">
          <h3>Media And Published</h3>

          <div>
            {/* Upload Box */}
            <div
              className="upload-box"
              onClick={handleBoxClick}
              style={{
                width: "220px",
                height: "220px",
                border: "2px dashed #aaa",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                name="image"
                onChange={handleImageChange}
                style={{ display: "none" }}
              />

              <div className="upload-content" style={{ textAlign: "center" }}>
                {preview ? (
                  <img
                    src={preview}
                    alt="preview"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "10px",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <>
                    <p style={{ opacity: 0.7 }}>Click to Upload Image</p>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Publish Button */}
          <button type="submit" className="publish-btn">
            <span className="cloud-icon">☁️</span> PUBLISH AND VIEW
          </button>
        </div>
      </form>
    </>
  );
}

export default Addproducts;
