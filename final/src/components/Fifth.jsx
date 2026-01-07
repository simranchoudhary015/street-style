import bags from '../assets/bags.png'
import accessries from '../assets/accessries.png'
import { Link } from 'react-router-dom'
function Fifth(){
    return(
        <>
         <div className="container-fluid">
                    <div className='line-text'><h1>BAGS & ACCESSIORES</h1></div>
                     <div className="row secr gap-5">
                                            <div className="col-lg-2 col-sm-3">
                                                <div class="card">
                                      <img src={"https://cdn.streetstylestore.com/2/1/9/7/4/3/219743-sss_vertical.webp"} class="card-img-top" height="272px" alt="..."/>
                                      <div class="card-body">
                                        <h5 class="card-title"><Link className="dropdown-item" to="/neckpiecesEaring">Accessories</Link></h5>
                                      </div>
                                    </div>
                                            </div>
                                             <div className="col-lg-2 col-sm-3">
                                                <div class="card">
                                      <img src={"https://cdn.streetstylestore.com/3/1/2/4/2/0/312420-sss_vertical.webp"} class="card-img-top" height="272px" alt="..."/>
                                      <div className="card-body">
                                        <h5 className="card-title"><Link className="nav-link" to="/bags">Bags</Link></h5>
                                      </div>
                                    </div>
                                            </div>
                                            </div>
                    </div>
        </>
    )
}
export default Fifth