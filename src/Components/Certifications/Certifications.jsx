import React from 'react'
import './Certifications.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import FrontendExpert from '../../img/Certifications/FrontendExpert.png';
import NodeJSDeveloper from '../../img/Certifications/NodeJSDeveloper.png';
import AlgoExpert from '../../img/Certifications/AlgoExpert.png';
import PythonBootcamp from '../../img/Certifications/PythonBootcamp.png';
import UCSanDiego1 from '../../img/Certifications/UCSanDiego1.png';
import UCSanDiego2 from '../../img/Certifications/UCSanDiego2.png';
import WebDevelopers from '../../img/Certifications/WebDevelopers.png';


const Certifications = () => {
  return (
    <div className="certifications">
        <span>Certifications</span>
        <Swiper
          spaceBetween={3}
          slidesPerView={3}
          grabCursor={true}
          className='certifications-slider'
        >
            <SwiperSlide>
                <img src={FrontendExpert} alt='' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={NodeJSDeveloper} alt='' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={AlgoExpert} alt='' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={UCSanDiego1} alt='' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={UCSanDiego2} alt='' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={WebDevelopers} alt='' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={PythonBootcamp} alt='' />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Certifications