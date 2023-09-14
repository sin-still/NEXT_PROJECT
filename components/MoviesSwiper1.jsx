'use client'
import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const MoviesSwiper = () => {
   return (
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}

      spaceBetween={50}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      loop={true}
      /* autoplay={{delay:2500, disableOnInteraction:false}} */
      /* pagination={{clickable:true}} */
      scrollbar={{draggable:true}}
    >

      <SwiperSlide><img src="/img/banner01.jpg" alt="banner1" /></SwiperSlide>
      <SwiperSlide><img src="/img/banner02.jpg" alt="banner2" /></SwiperSlide>
      <SwiperSlide><img src="/img/banner03.jpg" alt="banner3" /></SwiperSlide>
      <SwiperSlide><img src="/img/banner04.jpg" alt="banner4" /></SwiperSlide>
      
    </Swiper>
   );
};

export default MoviesSwiper;