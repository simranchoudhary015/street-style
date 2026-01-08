import React, { useState } from "react";
import { Link,useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import './Header.css'
function Header(){
     // State to track if menu is open
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
const handleLogout = () => {
    // Clear auth data
    localStorage.removeItem("token");
    localStorage.removeItem("role");

    // Redirect to FRONTEND login page
    window.location.href = "https://street-style-store-web.onrender.com/";
  };
     const [openSlides, setOpenSlides] = useState(false);
  const [openCategory, setOpenCategory] = useState(true); // default open like your image

    return(
        <>
        <div className="row header">
            <div className="col-2">
        <div className="App">
      {/* Icon button */}
      <button className="menu-icon" onClick={toggleMenu}>
        ☰
      </button>

      {/* Sidebar menu */}
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <span className="close-btn" onClick={toggleMenu}>
          ×
        </span>
         <h1 className="heading">ADMIN</h1> 
        <Link to="/dashboard"><i class="fa-solid fa-gauge"></i>Dashboard</Link>
        <Link to="/users"><i class="fa-solid fa-users"></i>Users</Link>
        <Link to="/homeslides"><i class="fas fa-image"></i> Home Slides</Link>
         <Link to="/products"><i class="fas fa-box"></i>  Products</Link>
         <Link to="/orders"><i class="fa-solid fa-briefcase"></i>Orders</Link>
        <a href="#" onClick={handleLogout}><i class="fa-solid fa-right-from-bracket"></i>Logout</a>
          

      </div>
    </div>
    </div>
    
</div>
   
        </>
    )
}
export default Header
