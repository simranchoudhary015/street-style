import heels from '../assets/heels.png'
import sliper from '../assets/sliper.png'
import boots from '../assets/boots.png'
import sneaker from '../assets/sneaker.png'
import { Link } from 'react-router-dom'
import './Home.css'
function Fourth(){
    return(
        <>
        <div className="container-fluid">
                    <div className='line-text'><h1>Curated Shoes Deals</h1></div>
                     <div className="row secr gap-5">
                                <div className="fc col-lg-3 col-sm-6">
                                    <div class="card">
                          <img src={"https://cdn.streetstylestore.com/2/4/4/0/2/7/244027-vertical_default.webp"} class="card-img-top" height="272px" alt="..."/>
                          <div class="card-body">
                            <h5 class="card-title"><Link className="dropdown-item" to="/heels">Heels</Link></h5>
                          </div>
                        </div>
                                </div>
                                 <div className="fc col-lg-3 col-sm-6">
                                    <div class="card">
                          <img src={"https://cdn.streetstylestore.com/2/2/0/1/2/0/220120-vertical_default.webp"} class="card-img-top" height="272px" alt="..."/>
                          <div className="card-body">
                            <h5 className="card-title"><Link className="dropdown-item"  to="/slipers">Under 500rs.</Link></h5>
                          </div>
                        </div>
                                </div>
                                 <div className="fc col-lg-3 col-sm-6">
                                    <div className="card">
                          <img src={"https://cdn.streetstylestore.com/3/1/4/0/8/0/314080-vertical_default.webp"} className="card-img-top" height="272px" alt="..."/>
                          <div className="card-body">
                            <h5 className="card-title"><Link className="dropdown-item" to="/shoes">Trending Boots</Link></h5>
                          </div>
                        </div>
                                </div>
                                 <div className="fc col-lg-3 col-sm-6">
                                    <div className="card">
                          <img src={"https://cdn.streetstylestore.com/2/8/9/1/1/5/289115-vertical_default.webp"} className="card-img-top" height="272px" alt="..."/>
                          <div className="card-body">
                            <h5 className="card-title"><Link className="dropdown-item" to="/sneakers">Sneakers under 799rs.</Link></h5>
                          </div>
                        </div>
                                </div>
                    
                                </div>
                </div>
        </>
    )
}
export default Fourth