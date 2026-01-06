import winter from '../assets/winter.png'
import topsunder from '../assets/topsunder.png'
import print from '../assets/Print.png'
import leather from '../assets/leather.png'
import hoodies from '../assets/hoodies.png'
import summer from '../assets/summer.png'
import { Link } from 'react-router-dom'
function Second(){
    return(
        <>
        <div className="container-fluid mt-5 sc">
            <div className='line-text'><h1>Curated Wardrobe Deals</h1></div>
            <div className="row secr gap-5">
            <div className="col-lg-2 col-sm-6">
                <div class="card">
      <img src={winter} class="card-img-top" height="272px" alt="..."/>
      <div class="card-body">
        <h5 class="card-title"><Link className="dropdown-item" to="/wintercollection">winter collection</Link></h5>
      </div>
    </div>
            </div>
             <div className="col-lg-2 col-sm-6">
                <div class="card">
      <img src={topsunder} class="card-img-top" height="272px" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">top under &#8377;499</h5>
      </div>
    </div>
            </div>
             <div className="col-lg-2 col-sm-6">
                <div className="card">
      <img src={leather} className="card-img-top" height="272px" alt="..."/>
      <div className="card-body">
        <h5 className="card-title"><Link className="dropdown-item" to="/leathercollection">Leather collection</Link></h5>
      </div>
    </div>
            </div>
             <div className="col-lg-2 col-sm-6">
                <div className="card">
      <img src={hoodies} className="card-img-top" height="272px" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Hoodies</h5>
      </div>
    </div>
            </div>
             <div className="col-lg-2 col-sm-6">
                <div className="card">
      <img src={summer} className="card-img-top" height="272px" alt="..."/>
      <div className="card-body">
        <h5 className="card-title"><Link className="dropdown-item" to="/croptop">Summer Collection</Link></h5>
      </div>
    </div>
            </div>
             <div className="col-lg-2 col-sm-6">
                <div className="card">
      <img src={print} class="card-img-top" height="272px" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Printed collection</h5>
      </div>
    </div>
            </div>

            </div>
        </div>
        </>
    )
}
export default Second