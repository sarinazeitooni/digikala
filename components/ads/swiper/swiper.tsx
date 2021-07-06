import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination} from 'swiper';
import urls from "./items/urls";
import style from './scss/swiper.module.scss';
SwiperCore.use([Navigation, Pagination]);
const SwiperAd = ()=>{
    return(
        <>
            <Swiper style={{'--swiper-theme-color' : 'white' , '--swiper-navigation-color': 'white' , '--swiper-navigation-size' : '26px'}} slidesPerView={1} navigation pagination={{ clickable: true }}>
                {urls.map((item)=>{
                    return(
                        <SwiperSlide>
                            <div className={style['swiper-img']} style={{background : `url("${item}")`}}/>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
};
export default SwiperAd;