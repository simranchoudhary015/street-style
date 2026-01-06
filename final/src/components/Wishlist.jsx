import { useCart } from "../context/CartContext";


function Wishlist() {
const { wishlist, addToCart } = useCart();


return (
<div className="container mt-4">
<h2>❤️ My Wishlist</h2>


{wishlist.length === 0 ? (
<p>Your wishlist is empty</p>
) : (
wishlist.map((item, index) => (
<div className="wishlist-item" key={index}>
<img
src={`http://localhost:5500/uploads/${item.image}`}
width="100"
alt={item.name}
/>
<div>
<h5>{item.name}</h5>
<p>₹{item.price}</p>
<button
className="btn btn-primary"
onClick={() => addToCart(item)}
>
Move to Cart
</button>
</div>
</div>
))
)}
</div>
);
}


export default Wishlist;