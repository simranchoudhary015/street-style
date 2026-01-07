function Footer() {
  return (
    <>
      <div className="container-fluid foot mt-4">

        <div className="row ms-5 mt-5 gap-5">
            <div className="fc col-lg-3 col-sm-6" >
                 <div class="card h-100">
      <i class="fa-regular fa-truck fa-3x"></i>
      <div class="card-body">
        <h5 class="card-title">Free Shipping </h5>
        <p class="card-text">For all order over &#8377;700 </p>
      </div>
    </div>
    </div>
            <div className="fc col-lg-3 col-sm-6">
                 <div class="card h-100">
      <i class="fa-solid fa-arrow-left fa-3x"></i>
      <div class="card-body">
        <h5 class="card-title">30 Days Return</h5>
        <p class="card-text">For an exchange product</p>
      </div>
    </div>
    </div>
     <div className="fc col-lg-3 col-sm-6">
                 <div class="card h-100">
      <i class="fa-solid fa-money-check-dollar fa-3x"></i>
      <div class="card-body">
        <h5 class="card-title">Secured Payment</h5>
        <p class="card-text">Payment card accepted</p>
      </div>
    </div>
    </div>
     <div className="fc col-lg-3 col-sm-6">
                 <div class="card h-100">
      <i class="fa-regular fa-headphones fa-3x"></i>
      <div class="card-body">
        <h5 class="card-title">Support 24/7</h5>
        <p class="card-text">Contact Us Any Time</p>
      </div>
    </div>
    </div>

            </div>

        <div className="row d-flex mt-5 ms-5">
          <div className="col-lg-3 col-sm-6">
            <h2>Contact Us</h2>
            <p className="fp">
              Street Style Store <br />
              146001-City Center,Hoshiarpur
            </p>
            <p className="eaddress">Simranchoudhary0274@gmail.com</p>
            <h3 className="contactnumber">(+91) 7814940409</h3>
          </div>
          <div className="col-lg-2 col-sm-6">
            <h2>Products</h2>
            <ul>
              <li>Price Drop</li>
              <li>New Products</li>
              <li>Best Sales</li>
              <li>Contact Us</li>
              <li>Stores</li>
              <li>Sitemap</li>
            </ul>
          </div>
          <div className="col-lg-3  col-sm-6">
            <h2>Our Company</h2>
            <ul>
              <li>Delivery</li>
              <li>legel notice</li>
              <li>Terms & conditions of us</li>
              <li>About us</li>
              <li>Secure payment</li>
              <li>Login</li>
            </ul>
          </div>
          <div className="col-lg-4  col-sm-6">
            <h2>Subscribe to newsletter</h2>
            <p>
              Subscribe to our latest newsletter to get news about Special
              discounts.
            </p>
            <input
              class="form-control me-2 w-50"
              type="search"
              placeholder="Your email address"
              aria-label="Search"
            />
            <button class="btn bt mt-2" type="submit">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
