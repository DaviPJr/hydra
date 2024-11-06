import React, { useRef } from 'react';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; 
import img1 from '../../Assets/Imagens/img1.png'
import img2 from '../../Assets/Imagens/img2.png'
import img3 from '../../Assets/Imagens/img3.png'
import img4 from '../../Assets/Imagens/img4.png'
import './CardMobile.css'

export const CardMobile = (props) => {

    const swiperRef = useRef(null);

  return (
    <div className='card-mobile-container'>
        <section className='card-mobile'>
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
                    <div className="swiper-slide-card">
                        <img src={img1} alt="" />
                        <h2>SIMULATION</h2>
                        <hr />
                        <p>Vitae sapien pellentesque habitant morbi
                            nunc. Viverra aliquet  porttitor rhoncus 
                            libero justo laoreet sit amet vitae.</p>
                        <button>TRY IT NOW</button>
                    </div>
                </SwiperSlide>
                    
                <SwiperSlide>
                     <div className="swiper-slide-card">
                         <img src={img2} alt="" />
                        <h2>EDUCATION</h2>
                        <hr />
                        <p>Vitae sapien pellentesque habitant morbi
                            nunc. Viverra aliquet  porttitor rhoncus 
                            libero justo laoreet sit amet vitae.</p>
                        <button>TRY IT NOW</button>
                     </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="swiper-slide-card">
                        <img src={img3} alt="" />
                        <h2>SELF-CARE</h2>
                        <hr />
                        <p>Vitae sapien pellentesque habitant morbi
                            nunc. Viverra aliquet  porttitor rhoncus 
                            libero justo laoreet sit amet vitae.</p>
                        <button>TRY IT NOW</button>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="swiper-slide-card">
                        <img src={img4} alt="" />
                        <h2>OUTDOOR</h2>
                        <hr />
                        <p>Vitae sapien pellentesque habitant morbi
                            nunc. Viverra aliquet  porttitor rhoncus 
                            libero justo laoreet sit amet vitae.</p>
                        <button>TRY IT NOW</button>
                    </div>
                </SwiperSlide>

            </Swiper>

        </section>

    </div>
  )
}

export default CardMobile;
