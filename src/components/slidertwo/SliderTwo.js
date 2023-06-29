import React from 'react';
import './SliderTwo.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import { Navigation } from 'swiper';
import img1 from '../../assets/slider/img1.png';
import img2 from '../../assets/slider/img2.png';
import img3 from '../../assets/slider/img3.png';
import img4 from '../../assets/slider/img4.png';
import img5 from '../../assets/slider/img5.png';
import img6 from '../../assets/slider/img6.png';
import img7 from '../../assets/slider/img7.png';
import img8 from '../../assets/slider/imh8.png';
import img9 from '../../assets/slider/img9.png';
import img10 from '../../assets/slider/img10.png';
import img11 from '../../assets/slider/img11.png';
import img12 from '../../assets/slider/img17.png';
import img13 from '../../assets/slider/img13.png';
import img14 from '../../assets/slider/img14.png';
import img15 from '../../assets/slider/img15.png';

function SliderTwo() {
  return (
    <div className="container">
      <div className="slider__container">
        <Swiper
          loop={true}
          slidesPerView={5}
          navigation={false}
          modules={[Navigation]}
          spaceBetween={0}
          breakpoints={{
            1256: {
              slidesPerView: 10,
              spaceBetween: 20,
            },
            990: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            600: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            300: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
          }}
        >
          <SwiperSlide>
            <div className="image__container">
              <img src={img1} alt="" /><br /><br /><br /><br /><br />
              <h1>Televizor</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image__container">
              <img src={img2} alt="" /><br /><br /><br /><br /><br />
              <h1>Noutbuk</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image__container">
              <img src={img3} alt="" /><br /><br /><br /><br /><br />
              <h1>Smartfon</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image__container">
              <img src={img4} alt="" /><br /><br /><br /><br /><br />
              <h1>Texnika</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image__container">
              <img src={img5} alt="" /><br /><br /><br /><br /><br />
              <h1>Oshxona anjomlari</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image__container">
              <img src={img6} alt="" /><br /><br /><br /><br /><br />
              <h1>Shtanka</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image__container">
              <img src={img7} alt="" /><br /><br /><br /><br /><br />
              <h1>Chiroy</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image__container">
              <img src={img8} alt="" /><br /><br /><br /><br /><br />
              <h1>Tovarlar</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image__container">
              <img src={img9} alt="" /><br /><br /><br /><br /><br />
              <h1>Avtotovarlar</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image__container">
              <img src={img10} alt="" /><br /><br /><br /><br /><br />
              <h1>Offislar</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image__container">
              <img src={img11} alt="" /><br /><br /><br /><br /><br />
              <h1>Oyinchoqlar</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image__container">
              <img src={img12} alt="" /><br /><br /><br /><br /><br />
              <h1>Sovgalar</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image__container">
              <img src={img13} alt="" /><br /><br /><br /><br /><br />
              <h1>Kiyimlar</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image__container">
              <img src={img14} alt="" /><br /><br /><br /><br /><br />
              <h1>Mebellar</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image__container">
              <img src={img15} alt="" /><br /><br /><br /><br /><br />
              <h1>Quloqchinlar</h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default SliderTwo;
