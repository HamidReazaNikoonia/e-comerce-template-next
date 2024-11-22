'use client';

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "swiper/css/effect-fade";

import './styles.css';

// import required modules
import { Pagination, Navigation, EffectFade } from 'swiper/modules';

export default function MainSwiper() {
  return (
    <>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        autoplay
        effect={"fade"}
        grabCursor
        loop
        modules={[Pagination, Navigation, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="swiper-zoom-container">
          <img alt="" className="swiper-lazy swiper-lazy-loaded" 
            src="/assets/images/s5.jpg" />
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="swiper-zoom-container">
          <img alt="" className="swiper-lazy swiper-lazy-loaded" 
            src="/assets/images/s6.jpg" />
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="swiper-zoom-container">
          <img alt="" className="swiper-lazy swiper-lazy-loaded" 
            src="/assets/images/s3.jpg" />
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="swiper-zoom-container">
          <img alt="" className="swiper-lazy swiper-lazy-loaded" 
            src="/assets/images/s4.jpg" />
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="swiper-zoom-container">
          <img alt="" className="swiper-lazy swiper-lazy-loaded" 
            src="/assets/images/s1.jpg" />
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="swiper-zoom-container">
          <img alt="" className="swiper-lazy swiper-lazy-loaded" 
            src="/assets/images/s2.jpg" />
        </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
