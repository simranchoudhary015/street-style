import dresses from '../assets/dresses.png'
import blackdress from '../assets/blackdress.png'
import coord from '../assets/coord.png'
import jumpsuit from '../assets/jumpsuit.png'
import shorts from '../assets/shorts.png'
import bodycon from '../assets/bodycon.png'
import { Link } from 'react-router-dom'
function Third(){
    return(
        <>
        <div className="container-fluid">
            <div className='line-text'><h1>Trending Clothes</h1></div>
             <div className="row secr gap-5">
                        <div className="col-lg-2 col-sm-6">
                            <div class="card">
                  <img src={blackdress} class="card-img-top" height="272px" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Black Dresses</h5>
                  </div>
                </div>
                        </div>
                         <div className="col-lg-2 col-sm-6">
                            <div class="card">
                  <img src={dresses} class="card-img-top" height="272px" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">ShortDresses</h5>
                  </div>
                </div>
                        </div>
                         <div className="col-lg-2 col-sm-6">
                            <div className="card">
                  <img src={coord} className="card-img-top" height="272px" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Coord-sets</h5>
                  </div>
                </div>
                        </div>
                         <div className="col-lg-2 col-sm-6">
                            <div className="card">
                  <img src={jumpsuit} className="card-img-top" height="272px" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title"><Link className="dropdown-item" to="/jumpsuit">Jumpsuit</Link></h5>
                  </div>
                </div>
                        </div>
                         <div className="col-lg-2 col-sm-6">
                            <div className="card">
                  <img src={shorts} className="card-img-top" height="272px" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title"><Link className="nav-link" to="/bottamwear">Shorts & Skirts</Link></h5>
                  </div>
                </div>
                        </div>
                         <div className="col-lg-2 col-sm-6">
                            <div className="card">
                  <img src={bodycon} class="card-img-top" height="272px" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Bodycon Dresses</h5>
                  </div>
                </div>
                        </div>
            
                        </div>
        </div>
        </>
    )
}
export default Third