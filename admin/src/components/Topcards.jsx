import './Topcards.css'
function Topcards(){
    return(
        <>
        <div className="cards-wrapper">
  <div className="stat-card orders">
    <div className="icon">
      <i className="fa-solid fa-cart-shopping"></i>
    </div>
    <div className="info">
      <h4>New Orders</h4>
      <p>1,390</p>
    </div>
  </div>

  <div className="stat-card sales">
    <div className="icon">
      <i className="fa-solid fa-indian-rupee-sign"></i>
    </div>
    <div className="info">
      <h4>Sales</h4>
      <p>₹57,890</p>
    </div>
  </div>

  <div className="stat-card revenue">
    <div className="icon">
      <i className="fa-solid fa-chart-line"></i>
    </div>
    <div className="info">
      <h4>Revenue</h4>
      <p>₹12,390</p>
    </div>
  </div>

  <div className="stat-card products">
    <div className="icon">
      <i className="fa-solid fa-box"></i>
    </div>
    <div className="info">
      <h4>Total Products</h4>
      <p>1,390</p>
    </div>
  </div>
</div>
        
        
        </>
    )
}
export default Topcards