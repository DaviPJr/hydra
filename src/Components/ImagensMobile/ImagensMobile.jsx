import React, { useRef } from "react";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import "./ImagensMobile.css";
import vive from "../../Assets/Imagens/vive.png";
import unreal from "../../Assets/Imagens/unreal.png";
import unity from "../../Assets/Imagens/unity.png";
import oculus from "../../Assets/Imagens/oculus.png";

export const ImagensMobile = () => {
  const swiperRef = useRef(null);

  return (
    <div className="imagensMobile">
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
          <div className="swiper-imagens-slider">
            <img src={vive} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-imagens-slider">
            <img src={unreal} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-imagens-slider">
            <img src={unity} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-imagens-slider">
            <img src={oculus} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>

      <div
        className="nav-btn custom-prev-button"
        onClick={() => swiperRef.current.swiper.slidePrev()}
      >
        <CiCircleChevLeft className="text-2xl" />
      </div>
      <div
        className="nav-btn custom-next-button"
        onClick={() => swiperRef.current.swiper.slideNext()}
      >
        <CiCircleChevRight className="text-2xl" />
      </div>
    </div>
  );
};

export default ImagensMobile;
