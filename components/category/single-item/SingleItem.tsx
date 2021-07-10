import React from 'react';
import SwiperCore, {Autoplay} from 'swiper/core';
import { Swiper, SwiperSlide } from "swiper/react";
import data from "../../specials/texts/data";
import CategoryCard from "../category-card/CategoryCard";
const SingleItem = () => {
    SwiperCore.use([Autoplay]);
    return (
        <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
            "delay": 3500,
            "disableOnInteraction": false
        }} className="mySwiper">
            {data.cards.map((item)=>{
                return(
                    <SwiperSlide>
                        <CategoryCard hasDiscount = {item.hasDiscount} discount={item.discount} img={item.img} price={item.price} title={item.title}/>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}
export default SingleItem;