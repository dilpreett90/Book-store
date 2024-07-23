import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import "./BannerCard.css"
// import required modules
import { EffectCards } from 'swiper/modules';

const BannerCard = () => {
  return (
    <div className="banner">
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide><img src="/src/assets/banner-books/daughterofcalamity.png" alt="Daughter of Calamity"/></SwiperSlide>
        <SwiperSlide><img src="/src/assets/banner-books/goodgirl.jpg" alt="Good Girl"/></SwiperSlide>
        <SwiperSlide><img src="/src/assets/banner-books/Holly.jpg" alt="Holly"/></SwiperSlide>
        <SwiperSlide><img src="/src/assets/banner-books/localwomanmissing.jpg" alt="Local Woman Missing"/></SwiperSlide>
        <SwiperSlide><img src="/src/assets/banner-books/neverlie.jpg" alt="Never Lie"/></SwiperSlide>
        <SwiperSlide><img src="/src/assets/banner-books/Secretsofrosebarrier.jpg" alt="Secrets of Rose Barrier"/></SwiperSlide>
        <SwiperSlide><img src="/src/assets/banner-books/thebest.jpg" alt="The Best"/></SwiperSlide>
        <SwiperSlide><img src="/src/assets/banner-books/twosidestoeverymurder.jpg" alt="Two Sides to Every Murder"/></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default BannerCard
