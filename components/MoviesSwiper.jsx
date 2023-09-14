'use client'
import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import './MoviesSwiper.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const MoviesSwiper = () => {
   return (
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}

      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      loop={true}
      /* autoplay={{delay:2500, disableOnInteraction:false}} */
      pagination={{clickable:true}}
      scrollbar={{draggable:true}}
    >

      <SwiperSlide><img src="/img/slide01.jpeg" alt="슬라이드1" /></SwiperSlide>
      <SwiperSlide><img src="/img/slide02.jpeg" alt="슬라이드2" /></SwiperSlide>
      <SwiperSlide><img src="/img/slide03.jpeg" alt="슬라이드3" /></SwiperSlide>
      
    </Swiper>
   );
};

export default MoviesSwiper;