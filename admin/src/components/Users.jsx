import './Users.css'
import { Link } from 'react-router-dom'
function Users(){
    return(
        <>
        <div class="orders-list-container mt-5">
            <div className='row'>
                <div className='col-6'>
  <h2>Users List</h2></div>
  <div className='col-6'>
    <nav aria-label="breadcrumb">
  <ol class="breadcrumb ms-5">
    <li class="breadcrumb-item"><Link to="/dashboard">Dashboards</Link></li>
    <li class="breadcrumb-item active" aria-current="page">Orders</li>
  </ol>
</nav>
  </div>
  </div>
  <table class="user-list-table">
    <thead>
      <tr>
        <th>User's Image</th>
        <th>User's Name</th> 
        <th>User's Email</th>
        <th>User's Phone Number</th>
       </tr>
    </thead>
    <tbody>
      <tr>
        <td>67122cd0152401e7dfcc819ae</td>
        <td>pay_PASDn20975B02</td>
        <td>demo</td>
        <td>📞 9490261313</td>
        
        
      </tr>
      <tr>
<td>67122741019ba270ce46619f</td>
        <td>DEEPAK</td>
         <td>wrad deqwewzqwe</td>
         <td>📞 8239744239</td>
       
      </tr>
      <tr>
        <td>671018fed10e3d9dbf8615f</td>
        <td>CSDV HASEEB</td>
        <td>New City Road 1. M</td>
        <td>📞 01757346415</td>
      </tr>
      <tr>
        <td>6710d1baabctb999135fb4</td>
        <td>bunny</td>
       <td>sdsfhdsfa</td> 
       <td>📞 25446252</td>
      </tr>
      <tr>
        <td>6710xxxxxx</td>
        <td>Rosalyn</td>
        <td>Bush BushEventi</td>
        <td>📞 +1 (834) 811-xxxx</td>
      </tr>
    </tbody>
  </table>
</div>
        </>
    )
}
export default Users