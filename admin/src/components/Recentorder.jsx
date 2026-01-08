import './Recentorder.css'
function Recentorder(){
    return(
        <>
        <div class="orders-container mt-5">
  <h2>Recent Orders</h2>
  <table class="orders-table">
    <thead>
      <tr>
        <th>Product Name</th>
        <th>Color</th>
        <th>Category</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>The Scarlet Rose Heel</td>
        <td>cherry</td>
        <td>Heels</td>
        <td>₹1199</td>
        <td><a href="#" class="edit-btn">Edit</a></td>
      </tr>
      <tr>
        <td>Winter Khaki Fleece Drop Shoulder Oversized Sweatshirt</td>
        <td>OffWhite</td>
        <td>Winter Wear</td>
        <td>₹899</td>
        <td><a href="#" class="edit-btn">Edit</a></td>
      </tr>
        <tr>
        <td>Full Sleeves Faux Leather Cropped Jacket</td>
        <td>Black</td>
        <td>Leather collection</td>
        <td>₹1299</td>
        <td><a href="#" class="edit-btn">Edit</a></td>
      </tr>
      <tr>
        <td>Winter Stripe Fitted Shirt</td>
        <td>Black/Goth Chic</td>
        <td>Shirts</td>
        <td>₹799</td>
        <td><a href="#" class="edit-btn">Edit</a></td>
      </tr>
      <tr>
        <td>Solid High-Waisted Wide-Leg Trousers</td>
        <td>brown</td>
        <td>Bottamwear</td>
        <td>₹899</td>
        <td><a href="#" class="edit-btn">Edit</a></td>
      </tr>
    </tbody>
  </table>
</div>

        </>
    )
}
export default Recentorder