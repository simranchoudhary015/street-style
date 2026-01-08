import logo from '../assets/logo.png'
import logo1 from '../assets/logo1.png'
import { useState } from 'react'
import './Home.css'
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";

function Secondheader(){
  const navigate = useNavigate();

   const[NavbarVisible,setNavbarVisible]=useState(false)
   const [search, setSearch] = useState("");
   const { cart, wishlist } = useCart();
   const handleLogout = () => {
    // Clear auth data
    localStorage.removeItem("token");
    localStorage.removeItem("role");

    // Redirect to FRONTEND login page
    window.location.href = "https://street-style-store-web.onrender.com/";
  };
   // 🔍 SEARCH DATA
  const searchItems = [
  { name: "Dresses", path: "/dresses" },
  { name: "Crop Top", path: "/croptop" },
  { name: "Jumpsuit", path: "/jumpsuit" },
  { name: "Bottom Wear", path: "/bottamwear" },
  { name: "Bags", path: "/bags" },
  { name: "Shoes", path: "/shoes" },
  { name: "Heels", path: "/heels" },
  { name: "Slipers", path: "/slipers" },
  { name: "Neckpieces", path: "/neckpiecesEaring" },
  { name: "Hand Accessories", path: "/handaccessories" },
  { name: "Hair Accessories", path: "/hairaccessories" }
];




  // 🔍 FILTER LOGIC
  const filteredItems = searchItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
    return(
    
        <>
       
      <div className='container-fluid sheader'>
        <div className='row'>
            <div className='col-lg-2'>
              <div className='icon'>
                <div className='cm'>
               {
        NavbarVisible ?
        <i className="fa-solid fa-xmark cancel fa-2xl" onClick={()=> setNavbarVisible(!NavbarVisible)}></i>:
        <i className="fa-solid fa-bars fa-2xl" onClick={()=>setNavbarVisible(!NavbarVisible)}></i>
       }
       </div>
       <img src={logo1} className="sslogo" alt="" height="120px" width="150px"/>
       <div className='scart'>
        <ul className='d-flex gap-3 me-3'>
         <li><Link to="/cart" class="position-relative cart mt-2">
  <i class="fa-solid fa-cart-shopping fa-xl"></i><span>{cart.length}</span></Link>
</li>
 <li><Link to="/wishlist" class="position-relative cart mt-2">
 <i class="fa-solid fa-heart fa-xl"></i><span>{wishlist.length}</span></Link>
</li>
 </ul>
     </div>
       </div>

<img src={logo1} className='logo' alt="" height="120px" width="150px"/>
            </div>
            <div className='col-lg-6 lsearch mt-5'>
               <form onSubmit={(e) => e.preventDefault()} className="position-relative">
              <input
                className="form-control"
                type="search"
                placeholder="Search items..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
               {/* 🔍 SEARCH RESULTS */}
              {search && (
                <div className="search-dropdown">
                  {filteredItems.length ? (
                    filteredItems.map((item, index) => (
                      <div
                        key={index}
                        className="search-item"
                        onClick={() => {
                          navigate(item.path);
                          setSearch("");
                        }}
                      >
                        {item.name}
                      </div>
                    ))
                  ) : (
                    <div className="search-item">No results found</div>
                  )}
                   </div>
              )}
            </form>
            </div>
            <div className='col-lg-4 lgi'>
              <ul className='buttons d-flex gap-4'>
                <li className='logsign'>
               <div class="account-container">
    <button class="account-button">
      <i class="fas fa-user-circle"></i>
      <div>
        <div>My Account</div>
        <div class="account-email">munish@example.com</div>
      </div>
    </button>
    <div class="account-dropdown">
      <Link to="/">Login</Link>
      <Link to="/orders">Orders</Link>
      <a onClick={handleLogout}>Logout</a>
    </div>
  </div>
</li>
              
                
                 
                {/* <li><i class="fa-solid fa-user fa-xl"></i></li> */}
                
 <li><Link to="/cart" class="position-relative cart ms-3 mt-2">
  <i class="fa-solid fa-cart-shopping fa-xl"></i><span>{cart.length}</span></Link>
</li>
 <li><Link to="/wishlist" class="position-relative cart ms-2 mt-2">
 <i class="fa-solid fa-heart fa-xl"></i><span>{wishlist.length}</span></Link>
</li>
 </ul>
            </div>
        </div>
      </div>

      <div id="menu" className={`${NavbarVisible?`show`:`hide`}`} >
        <form className="d-flex p-50" role="search">
      <input className="form-control msearch" type="search" placeholder="Search" aria-label="Search" />
    </form>
    <ul>
         
         <Link className="nav-link active home" aria-current="page" to="/home">Home</Link>
         <Link className="nav-link" to="/dresses">Dresses</Link>
         <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Topwear
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/croptop">Croptop</Link></li>
            <li><a className="dropdown-item" href="#">Shirts & Tshirts</a></li>
            <li><Link className="dropdown-item" to="/jumpsuit">Jumpsuit</Link></li>
          </ul>
         <Link className="nav-link" to="/bottamwear">Bottamwear</Link>
         <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Footwear
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/shoes">Shoes</Link></li>
            <li><Link className="dropdown-item" to="/heels">Heels</Link></li>
            <li><Link className="dropdown-item" to="/slipers">Slipers</Link></li>
          </ul>
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Accessories
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/neckpiecesEaring">Neckpieces & Earings</Link></li>
            <li><Link className="dropdown-item" to="/handaccessories">HandAccessories</Link></li>
            <li><Link className="dropdown-item" to="/hairaccessories">Hair clutch</Link></li>
          </ul>
    </ul>
    </div>
        </>
    )
}
export default Secondheader