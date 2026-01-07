import winter from '../assets/winter.png'
import topsunder from '../assets/topsunder.png'
import print from '../assets/Print.png'
import leather from '../assets/leather.png'
import hoodies from '../assets/hoodies.png'
import summer from '../assets/summer.png'
import { Link } from 'react-router-dom'
import './Home.css'
function Second(){
    return(
        <>
        <div className="container-fluid mt-5 sc">
            <div className='line-text'><h1>Curated Wardrobe Deals</h1></div>
            <div className="row secr gap-5">
            <div className="col-lg-2 col-sm-6">
                <div class="card">
      <img src={"https://images.streetstylestore.com/3/1/1/1/8/0/311180.jpg"} class="card-img-top" height="272px" alt="..."/>
      <div class="card-body">
        <h5 class="card-title"><Link className="dropdown-item" to="/womenEthnicWear">Women Ethnic Wear</Link></h5>
      </div>
    </div>
            </div>
             <div className="col-lg-2 col-sm-6">
                <div class="card">
      <img src={"https://images.streetstylestore.com/3/1/6/2/8/3/316283.jpg"} class="card-img-top" height="272px" alt="..."/>
      <div className="card-body">
        <h5 className="card-title"><Link className="dropdown-item" to="/twoinone">Set of two &#8377;1099</Link></h5>
      </div>
    </div>
            </div>
             <div className="col-lg-2 col-sm-6">
                <div className="card">
      <img src={"https://images.streetstylestore.com/3/1/2/8/6/5/312865.jpg"} className="card-img-top" height="272px" alt="..."/>
      <div className="card-body">
        <h5 className="card-title"><Link className="dropdown-item" to="/leathercollection">Leather collection</Link></h5>
      </div>
    </div>
            </div>
             <div className="col-lg-2 col-sm-6">
                <div className="card">
      <img src={"https://images.streetstylestore.com/2/6/9/2/5/0/269250.jpg"} className="card-img-top" height="272px" alt="..."/>
      <div className="card-body">
        <h5 className="card-title"><Link className="dropdown-item" to="/hoodies">Hoodies</Link></h5>
      </div>
    </div>
            </div>
             <div className="col-lg-2 col-sm-6">
                <div className="card">
      <img src={"https://images.streetstylestore.com/2/4/6/1/9/7/246197.jpg"} className="card-img-top" height="272px" alt="..."/>
      <div className="card-body">
        <h5 className="card-title"><Link className="dropdown-item" to="/croptop">Summer Collection</Link></h5>
      </div>
    </div>
            </div>
             {/* <div className="col-lg-2 col-sm-6">
                <div className="card">
      <img src={print} class="card-img-top" height="272px" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Printed collection</h5>
      </div>
    </div> */}
          

            </div>
        </div>
        </>
    )
}
export default Second