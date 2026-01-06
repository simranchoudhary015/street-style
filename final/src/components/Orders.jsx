import React from "react";

const orders = [
  { id: 101, product: "Ring", qty: 2, price: "₹120", status: "Pending" },
  { id: 102, product: "Hoodie", qty: 1, price: "₹800", status: "Shipped" },
  { id: 103, product: "Skirt", qty: 3, price: "₹1200", status: "Delivered" },
  { id: 104, product: "hair-clutch", qty: 1, price: "₹80", status: "Pending" },
];

function Orders(){
    return(
        <>
        <div className="container mt-4">
      <h2 className="text-center mb-4">📦 Order Details</h2>
      <table className="table table-striped table-hover text-center">
        <thead className="table-dark">
          <tr>
            <th>Order ID</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.product}</td>
              <td>{order.qty}</td>
              <td>{order.price}</td>
              <td>
                <span
                  className={`badge ${
                    order.status === "Delivered"
                      ? "bg-success"
                      : order.status === "Shipped"
                      ? "bg-info"
                      : "bg-warning"
                  }`}
               >
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

        </>
    )
       
}
export default Orders