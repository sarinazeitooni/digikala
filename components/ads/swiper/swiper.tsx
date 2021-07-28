import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination , EffectFade} from 'swiper';
import urls from "./items/urls";
import { v4 as uuidv4 } from 'uuid';
import style from './scss/swiper.module.scss';
SwiperCore.use([EffectFade,Navigation, Pagination]);
const SwiperAd = ()=>{
    return(
        <Swiper style={{'--swiper-theme-color' : 'white' , '--swiper-navigation-color': 'white' , '--swiper-navigation-size' : '26px'}} slidesPerView={1} navigation  effect={'fade'} pagination={{ clickable: true }}>
                {urls.map((item: string)=>{
                    return(
                        <SwiperSlide key={uuidv4()}>
                            <div className={style['swiper-img']} style={{background : `url("${item}")`}}/>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
    )
};
export default SwiperAd;