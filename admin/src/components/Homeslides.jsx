import './Homeslides.css'
import { useNavigate } from "react-router-dom";
import React from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
function Homeslides(){
        const navigate = useNavigate();
          const [banners, setBanners] = useState([]);
          async function fetchBanners() {
              const data = await axios.get(
                "http://localhost:5500/api/banner/fetchbanners"
              );
              console.log(data.data)
              setBanners(data.data.addbanners);
            }
          useEffect(() => {
            async function fetchBanners() {
              const data = await axios.get(
                "http://localhost:5500/api/banner/fetchbanners"
              );
              console.log(data.data)
              setBanners(data.data.addbanners);
            }
            fetchBanners();
          }, []);
           const handleDelete=async(id)=>{
    try {
      await axios.delete(`http://localhost:5500/api/banner/delete/${id}`)
      console.log("banner deleted")
      fetchBanners()
    } catch (error) {
      console.log(error)
    }
  }
    return(
        <>
         <div className="container-fluid bg-white p-4 rounded shadow mt-5">
    <div className="d-flex justify-content-between align-items-center">
      <h4 className="mb-0">Homeslides Banners</h4>
      <div className="d-flex gap-2">
        <input type="text" className="form-control search-input w-75 h-50" placeholder="Search"/>
        <button className="btn btn-add w-50 h-25" onClick={() => navigate("/addbanners")}>+ Add Banners</button>
         

      </div>
    </div>
  </div>
        <table className='homeslides-list-table'>
        <thead>
          <tr>
            <th>Sr.No.</th>
            <th>banner</th>
            <th>discount</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {banners.length > 0 ? (
            banners.map((banners, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
  <img
    src={`http://localhost:5500/uploads/${banners.image}`}
    alt="banner"
    width="80"
    height="50"
    style={{ objectFit: "cover", borderRadius: "6px" }}
  />
</td>
<td>{banners.discount}</td>
 <td onClick={()=>handleDelete(banners._id)}>Delete</td>
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
    )
}
export default Homeslides