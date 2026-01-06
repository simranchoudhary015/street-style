import heels from '../assets/heels.png'
import sliper from '../assets/sliper.png'
import boots from '../assets/boots.png'
import sneaker from '../assets/sneaker.png'
import { Link } from 'react-router-dom'
function Fourth(){
    return(
        <>
        <div className="container-fluid">
                    <div className='line-text'><h1>Curated Shoes Deals</h1></div>
                     <div className="row secr">
                                <div className="col-lg-3 col-sm-6">
                                    <div class="card w-75">
                          <img src={heels} class="card-img-top" height="272px" alt="..."/>
                          <div class="card-body">
                            <h5 class="card-title"><Link className="dropdown-item" to="/heels">Heels</Link></h5>
                          </div>
                        </div>
                                </div>
                                 <div className="col-lg-3 col-sm-6">
                                    <div class="card w-75">
                          <img src={sliper} class="card-img-top" height="272px" alt="..."/>
                          <div className="card-body">
                            <h5 className="card-title"><Link className="dropdown-item"  to="/slipers">Under 500rs.</Link></h5>
                          </div>
                        </div>
                                </div>
                                 <div className="col-lg-3 col-sm-6">
                                    <div className="card w-75">
                          <img src={boots} className="card-img-top" height="272px" alt="..."/>
                          <div className="card-body">
                            <h5 className="card-title"><Link className="dropdown-item" to="/shoes">Trending Boots</Link></h5>
                          </div>
                        </div>
                                </div>
                                 <div className="col-lg-3 col-sm-6">
                                    <div className="card w-75">
                          <img src={sneaker} className="card-img-top" height="272px" alt="..."/>
                          <div className="card-body">
                            <h5 className="card-title">Sneakers under 799rs.</h5>
                          </div>
                        </div>
                                </div>
                    
                                </div>
                </div>
        </>
    )
}
export default Fourth