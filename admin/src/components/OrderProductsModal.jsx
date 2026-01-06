import "./Orders.css";

const OrderProductsModal = ({ order, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h3>Ordered Products</h3>

        {order.products.map((item, index) => (
          <div className="product-row" key={index}>
            <img
              src={`http://localhost:5500/uploads/${item.image}`}
              alt={item.name}
            />

            <div>
              <h5>{item.name}</h5>
              <p>Size: {item.size}</p>
              <p>Qty: {item.quantity}</p>
              <p>₹{item.price}</p>
            </div>
          </div>
        ))}

        <button className="corderview" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default OrderProductsModal;
