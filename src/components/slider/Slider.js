import React from 'react';
import './Slider.css';
import bg1 from '../../assets/slider/bg1.png';
import bg2 from '../../assets/slider/bg2.png';
import bg3 from '../../assets/slider/bg3.png';
import bg4 from '../../assets/slider/bg4.png';
import bg5 from '../../assets/slider/bg5.png';
import bg6 from '../../assets/slider/bg6.png';
import bg7 from '../../assets/slider/bg7.png';

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

function Slider() {
  return (
    <div className="container">
      <div className="slider__container">
        <Swiper
          loop={true}
          navigation={false}
          modules={[Navigation]}
          className="mySwiper"
          autoplay={{
            delay: 10000, // Set delay to 1000ms (1 second)
          }}
        >
          <SwiperSlide>
            <img src={bg1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bg2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bg3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bg4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bg5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bg6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bg7} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Slider;
