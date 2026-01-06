import "./Products.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
function Products() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  async function fetchProducts() {
      const data = await axios.get(
        "https://street-style-shop-server.onrender.com/api/product/fetchproducts"
      );
      console.log(data.data.addproducts);
      setProducts(data.data.addproducts);
    }
  useEffect(() => {
    async function fetchProducts() {
      const data = await axios.get(
        "https://street-style-shop-server.onrender.com/api/product/fetchproducts"
      );
      console.log(data.data.addproducts);
      setProducts(data.data.addproducts);
    }
    fetchProducts();
  }, []);
  const handleDelete=async(id)=>{
    try {
      await axios.delete(`https://street-style-shop-server.onrender.com/api/product/delete/${id}`)
      console.log("product deleted")
      fetchProducts()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="container-fluid bg-white p-4 rounded shadow mt-5">
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="mb-0">Products</h4>
          <div className="d-flex gap-2">
            <input
              type="text"
              className="form-control search-input w-75 h-50"
              placeholder="Search"
            />
            <button
              className="btn btn-add w-50 h-25"
              onClick={() => navigate("/addproducts")}
            >
              + Add products
            </button>
          </div>
        </div>
      </div>

      <table class="orders-list-table w-100">
        <thead>
          <tr>
            <th>Sr.No.</th>
            <th> productName</th>
            <th>description</th>
            <th>product category</th>
            <th>products price</th>
            <th>products oldprice</th>
            <th>stock</th>
            <th>discount</th>
            <th>size</th>
            <th>rating</th>
            <th>location</th>
            <th>product</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((products, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{products.name}</td>
                <td>{products.description}</td>
                <td>{products.category}</td>
                <td>{products.price}</td>
                <td>{products.oldPrice}</td>
                <td>{products.stock}</td>
                <td>{products.discount}</td>
                <td>{products.size}</td>
                <td>{products.rating}</td>
                <td>{products.location}</td>
                <td>
                  <img
                    src={`https://street-style-shop-server.onrender.com/uploads/${products.image}`}
                    alt="product"
                    width="60"
                    height="60"
                    style={{ objectFit: "cover", borderRadius: "6px" }}
                  />
                </td>
                <td onClick={()=>handleDelete(products._id)}>Delete</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8">No users found</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}
export default Products;
