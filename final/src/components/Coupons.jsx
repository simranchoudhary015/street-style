import { useRef } from 'react'
const coupons = [
  { code: "SAVE10", discount: "10%", minSpend: "₹150", validTill: "2025-12-31" },
  { code: "FASHION20", discount: "20%", minSpend: "₹250", validTill: "2026-01-15" },
  { code: "URBAN30", discount: "30%", minSpend: "₹400", validTill: "2026-02-01" },
];

function Coupons(){
    return(
<>
<div className="container mt-4">
      <h2 className="text-center mb-4">🎟️ Coupon Chart</h2>
      <table className="table table-bordered table-hover text-center">
        <thead className="table-dark">
          <tr>
            <th>Coupon Code</th>
            <th>Discount</th>
            <th>Min Spend</th>
            <th>Valid Till</th>
          </tr>
        </thead>
        <tbody>
          {coupons.map((coupon, index) => (
            <tr key={index}>
              <td><strong>{coupon.code}</strong></td>
              <td style={{ color: "red" }}>{coupon.discount}</td>
              <td>{coupon.minSpend}</td>
              <td>{coupon.validTill}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

</>
    )
}
export default Coupons