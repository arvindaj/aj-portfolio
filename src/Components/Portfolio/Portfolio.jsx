import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import  Snsproject from "../../img2/snsproject.jpeg.jpg";
import  Diplomaproject from "../../img2/diplomaproject.jpeg.jpg";
import  Pswebsite from "../../img2/pswebsite.jpg";
import  Tonertouch from "../../img2/tonertouch.png";
import { themeContext } from "../../Context";
import { useContext } from "react";


const Portfolio = () => {
  const theme =useContext(themeContext)
  const darkMode = theme.state.darkMode;

  return (<div className="portfolio">
  {/* heading */}
  <span style={{color: darkMode?'white': ''}}>Project</span>
  <span>Portfolio</span>

  {/* slider */}
  <Swiper
    spaceBetween={30}
    slidesPerView={3}
    grabCursor={true}
    className="portfolio-slider"
  >
    <SwiperSlide>
      <img src={ Tonertouch} alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={ Pswebsite} alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={  Snsproject} alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={ Diplomaproject} alt="" />
    </SwiperSlide>
  </Swiper>
</div>
  );
};

export default Portfolio
