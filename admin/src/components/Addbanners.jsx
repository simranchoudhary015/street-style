import React, { useState, useRef } from "react";
import './Addproducts.css'
function Addbanners() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [discount, setDiscount] = useState(""); // ✅ state for discount
  const fileInputRef = useRef();

  const handleBoxClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please select an image");
      return;
    }

    if (!discount) {
      alert("Please enter a discount");
      return;
    }

    const formData = new FormData();
    formData.append("image1", image);   // multer field
    formData.append("discount", discount); // ✅ append discount from state

    try {
      const res = await fetch("http://localhost:5500/api/banner/upload-image", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      console.log(data);
      alert("Image uploaded successfully");
    } catch (error) {
      console.error(error);
      alert("Upload failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
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
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
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
          <p style={{ opacity: 0.7 }}>Click to Upload Image</p>
        )}
      </div>

      <div>
        <label>Product Discount (%)</label>
        <input
          type="text"
          value={discount} // bind state
          onChange={(e) => setDiscount(e.target.value)} // update state
          className="input"
        />
      </div>

      <button type="submit" className="publish-btn">Upload Banner</button>
    </form>
  );
}

export default Addbanners;
