import React from 'react';
import './Projects.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import CrwnClothing from '../../img/Projects/CrwnClothing.png'
import NASAMissionControl from '../../img/Projects/NASAMissionControl.png';
import Natours from '../../img/Projects/Natours.png';
import PortfolioWebsite from '../../img/Projects/PortfolioWebsite.png';
import Stopwatch from '../../img/Projects/Stopwatch.png';
import TicTacToe from '../../img/Projects/TicTacToe.png';

const Projects = () => {
  return (
    <div className="projects">
        <span>Recent Projects</span>
        <Swiper
          spaceBetween={3}
          slidesPerView={3}
          grabCursor={true}
          className='projects-slider'
        >
            <SwiperSlide>
                <img src={PortfolioWebsite} alt='' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={CrwnClothing} alt='' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={NASAMissionControl} alt='' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Natours} alt='' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={TicTacToe} alt='' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Stopwatch} alt='' />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Projects