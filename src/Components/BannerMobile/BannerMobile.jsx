import React, { useRef } from 'react';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; 
import { CiCircleChevLeft, CiCircleChevRight } from 'react-icons/ci';
import location from '../../Assets/Imagens/location.png';
import phone from '../../Assets/Imagens/phone.png';
import mail from '../../Assets/Imagens/mail.png';
import './BannerMobile.css';


export const BannerMobile = () => {

    const swiperRef = useRef(null);


  return (
    <div className="banner-container">
            <section className='banner-mobile'>
        <Swiper
            ref={swiperRef} 
            spaceBetween={50}
            slidesPerView={1}
            navigation={true} 
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{ delay: 3000 }}
        >
            <SwiperSlide>
               <div className="swiper-slider">
                    <img src={location} alt="Location icon" className="image" />
                    <p>Union St, Seattle, WA 98101, US</p>
              </div>
              </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slider">
                    <img src={phone} alt="Phone icon" className="image" />
                    <p>(110) 1111-1010</p>
              </div>
              </SwiperSlide>
            <SwiperSlide>
             <div className="swiper-slider">
                    <img src={mail} alt="Mail icon" className="image" />
                    <p>Contact@HydraVTech.com</p>
             </div>
             </SwiperSlide>
        </Swiper>

         <div 
         className="nav-btn custom-prev-button"
         onClick={() => swiperRef.current.swiper.slidePrev()}>
            <CiCircleChevLeft className="text-2xl" />
         </div>
         <div 
         className="nav-btn custom-next-button"
         onClick={() => swiperRef.current.swiper.slideNext()}
         >
             <CiCircleChevRight className="text-2xl" />
        </div>
    </section>
    </div>
    
  )
}

export default BannerMobile;
