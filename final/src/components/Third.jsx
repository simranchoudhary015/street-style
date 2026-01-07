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
                  <img src={"https://images.streetstylestore.com/2/5/6/6/9/3/256693.jpg"} class="card-img-top" height="272px" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title"><Link className="dropdown-item" to="/blackdresses">Black Dresses</Link></h5>
                  </div>
                </div>
                        </div>
                         <div className="col-lg-2 col-sm-6">
                            <div class="card">
                  <img src={"https://images.streetstylestore.com/2/0/8/1/7/3/208173.jpg"} class="card-img-top" height="272px" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title"><Link className="dropdown-item" to="/dresses">ShortDresses</Link></h5>
                  </div>
                </div>
                        </div>
                         <div className="col-lg-2 col-sm-6">
                            <div className="card">
                  <img src={"https://images.streetstylestore.com/2/9/8/5/1/0/298510.jpg"} className="card-img-top" height="272px" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title"><Link className="dropdown-item" to="/coodsets">Coord-sets</Link></h5>
                  </div>
                </div>
                        </div>
                         <div className="col-lg-2 col-sm-6">
                            <div className="card">
                  <img src={"https://images.streetstylestore.com/2/5/3/1/1/6/253116.jpg"} className="card-img-top" height="272px" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title"><Link className="dropdown-item" to="/jumpsuit">Jumpsuit</Link></h5>
                  </div>
                </div>
                        </div>
                         <div className="col-lg-2 col-sm-6">
                            <div className="card">
                  <img src={"https://cdn.streetstylestore.com/2/1/9/8/6/7/219867-sss_vertical.webp"} className="card-img-top" height="272px" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title"><Link className="nav-link" to="/bottamwear">Shorts & Skirts</Link></h5>
                  </div>
                </div>
                        </div>
                         <div className="col-lg-2 col-sm-6">
                            <div className="card">
                  <img src={"https://cdn.streetstylestore.com/3/1/5/1/2/7/315127-sss_vertical.webp"} class="card-img-top" height="272px" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title"><Link className="nav-link" to="/bodycondresses">Bodycon Dresses</Link></h5>
                  </div>
                </div>
                        </div>
            
                        </div>
        </div>
        </>
    )
}
export default Third