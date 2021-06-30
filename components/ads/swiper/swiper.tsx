import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import urls from "./items/urls";
import style from './scss/swiper.module.scss'
const SwiperAd = ()=>{
    return(
        <>
            <Swiper slidesPerView={1} navigation pagination={{ clickable: true }}>
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