import {Link} from "react-router-dom"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
function Nav() {
  
  return (
    <>
      <div className="container-fluid">
        <div className="row nav">
          <div className="col-8">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul class="navbar-nav gap-5">
        <li className="nav-item">
          <Link className="nav-link active home" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/dresses">Dresses</Link>
        </li>
         <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Topwear
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/croptop">Croptop</Link></li>
            <li><Link className="dropdown-item" to="/shirts">Shirts & Tshirts</Link></li>
            <li><Link className="dropdown-item" to="/jumpsuit">Jumpsuit</Link></li>
          </ul>
        </li>
         <li className="nav-item">
          <Link className="nav-link" to="/bottamwear">Bottamwear</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/bags">Bags</Link>
        </li>
         <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Footwear
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/shoes">Shoes</Link></li>
            <li><Link className="dropdown-item" to="/heels">Heels</Link></li>
            <li><Link className="dropdown-item" to="/slipers">Slipers</Link></li>
          </ul>
        </li>
         <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Accessories
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/neckpiecesEaring">Neckpieces & Earings</Link></li>
            <li><Link className="dropdown-item" to="/handaccessories">HandAccessories</Link></li>
            <li><Link className="dropdown-item" to="/hairaccessories">Hair clutch</Link></li>
          </ul>
        </li>

      </ul>
                   </div>
              </div>
            </nav>
          </div>
          <div className="col-4 fdelivery">
            <p>
              <i className="fa-solid fa-rocket fa-xl"></i>Free international
              Delivery
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Nav;
