import{Swiper, SwiperSlide} from 'swiper/react'
import{Navigation, Autoplay, Pagination} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import banner1 from '../assets/banner1.png'
import banner2 from '../assets/banner2.png'
import banner3 from '../assets/banner3.png'
import banner4 from '../assets/banner4.png'
import banner5 from '../assets/banner5.png'
import banner6 from '../assets/banner6.png'
import banner7 from '../assets/banner7.png'
import banner8 from '../assets/banner8.png'
import banner9 from '../assets/banner9.png'
import banner10 from '../assets/banner10.png'
import banner11 from '../assets/banner11.png'
import banner12 from '../assets/banner12.png'
import banner13 from '../assets/banner13.png'
import banner14 from '../assets/banner14.png'
import banner15 from '../assets/banner15.png'
function First(){
    return(
<>
<div className="container-fluid swiper mt-3">
    <Swiper modules={[Navigation, Autoplay, Pagination]}
    sliderPerView={1}
    spaceBetween={30}
    speed={3000}
    loop={true}
    pagination={{clickable: true}}
    // autoplay={{
    //     delay: 1000,
    // }}
    // breakpoints={{
    //     0:{slidesPerView: 1},
    //     575:{slidesPerView:1},
    //      768:{slidesPerView:1},
    //       992:{slidesPerView:1},
    //        1200:{slidesPerView:1},
    //         1300:{slidesPerView:4},

    // }}
     >
    <SwiperSlide>
    <div className='row'>
        <div className='col-8 emg'>
            <img src={banner2} alt="" height="500px" width="100%" />
        </div>
        <div className=' col-4 writen'>
            <h1 className='heading'>HANDBAGS</h1>
           <p className='text'>50-60% Off</p>
           <hr />
          <button class="btn fs-4" type="submit">+ Explore</button>
        </div>
    </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className='row'>
        <div className='col-8 emg'>
            <img src={banner12} alt="" height="500px" width="100%"/>
        </div>
        <div className='col-4 writen'>
            <h1 className='heading'>Dresses</h1>
           <p className='text'>Flat 30% Off</p>
         <hr />
          <button class="btn fs-4" type="submit">+ Explore</button>
        </div>
    </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className='row'>
        <div className='col-8 emg'>
            <img src={banner11} alt="" height="500px" width="100%"/>
        </div>
        <div className='col-4 writen'>
            <h1 className='heading'>Accesories</h1>
           <p className='text'>Under &#8377;150</p>
         <hr />
          <button class="btn fs-4" type="submit">+ Explore</button>
        </div>
    </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className='row'>
        <div className='col-8 emg'>
            <img src={banner15} alt="" height="500px" width="100%"/>
        </div>
        <div className='col-4 writen'>
            <h1 className='heading'>HEELS & FOOTWEAR</h1>
           <p className='text'>Up to 70% off</p>
           <hr />
           <button class="btn fs-4" type="submit">+ Explore</button>
        </div>
    </div>
    </SwiperSlide>
    </Swiper>
</div>
 <div class="promo-button">
    UPTO ₹200 OFF
  </div>

</>
    )
}
export default First