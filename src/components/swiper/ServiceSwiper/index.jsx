'use client'

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';

// compo
import ServiceSwiperCardItem from '@/components/Card/ServiceSwiperCardItem';

export default function ServiceSwiper() {
  

  return (
    <>
      <Swiper
        slidesPerView={4}
        centerInsufficientSlides
        centeredSlides
        initialSlide={3}
        loop
        spaceBetween={20}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[ Navigation]}
        className="service_swiper"
      >
        <SwiperSlide>
        <ServiceSwiperCardItem imageSrc={`/assets/images/s3.jpg`} title=" تغییر و تطبیق صدا با هوش مصنوعی" link={undefined}  />
        </SwiperSlide>


        <SwiperSlide>
        <ServiceSwiperCardItem imageSrc={`assets/images/s3.jpg`} title=" تغییر و تطبیق صدا با هوش مصنوعی" link={undefined} />
        </SwiperSlide>


        <SwiperSlide>
        <ServiceSwiperCardItem imageSrc={`/assets/images/s3.jpg`} title=" تغییر و تطبیق صدا با هوش مصنوعی" link={undefined} />
        </SwiperSlide>


        <SwiperSlide>
        <ServiceSwiperCardItem imageSrc={`assets/images/s3.jpg`} title=" تغییر و تطبیق صدا با هوش مصنوعی" link={undefined} />
        </SwiperSlide>

        <SwiperSlide>
        <ServiceSwiperCardItem imageSrc={`/assets/images/s3.jpg`} title=" تغییر و تطبیق صدا با هوش مصنوعی" link={undefined} />
        </SwiperSlide>

      </Swiper>
    </>
  );
}
