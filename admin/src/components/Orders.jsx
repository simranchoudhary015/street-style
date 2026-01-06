import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Orders.css";
import OrderProductsModal from "../components/OrderProductsModal";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    axios
      .get("https://street-style-shop-server.onrender.com/api/orders")
      .then((res) => setOrders(res.data));
  }, []);

  return (
    <>
      <div className="orders-list-container mt-5">
        <div className="row">
          <div className="col-6">
            <h2>Orders List</h2>
          </div>
          <div className="col-6">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li className="breadcrumb-item active">Orders</li>
              </ol>
            </nav>
          </div>
        </div>

        <table className="orders-list-table">
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Payment Id</th>
              <th>Products</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Address</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.paymentId}</td>

                {/* 🔥 CLICK HERE */}
                <td>
                  <span
                    className="view-link"
                    onClick={() => setSelectedOrder(order)}
                  >
                    Click here to view
                  </span>
                </td>

                <td>{order.address.name}</td>
                <td>📞 {order.address.phone}</td>
                <td>
                  {order.address.addressLine},{" "}
                  {order.address.city},{" "}
                  {order.address.state}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ✅ PRODUCT MODAL */}
      {selectedOrder && (
        <OrderProductsModal
          order={selectedOrder}
          onClose={() => setSelectedOrder(null)}
        />
      )}
    </>
  );
}

export default Orders;
