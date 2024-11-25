import React, { useRef } from "react";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import "./CirclesMobile.css";

const CirclesMobile = ({ circlesData }) => {
  const swiperRef = useRef(null);
  return (
    <div className="circlesMobile">
      <Swiper
        ref={swiperRef}
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 3000 }}
      >
        {circlesData.map((circle) => (
          <SwiperSlide key={circle.id} className="swiper-slider-circlesMobile">
            <div className="circles-numberMobile">
              <h1>{circle.title}</h1>
            </div>
            <div className="circles-pMobile">
              <div className="circles-p-textMobile">
                <p>{circle.firstTitle}</p>
                <p>{circle.secondTitle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
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

export default CirclesMobile;
