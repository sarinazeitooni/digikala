import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import data from "../../specials/texts/data";
import CategoryCard from "../category-card/Category-card";
const CategorySwiper = ()=>{
    return(
        <>
            <Swiper slidesPerView={6} pagination={{ clickable: true }}>
                {data.cards.map((item)=>{
                    return(
                        <SwiperSlide>
                            <CategoryCard hasDiscount = {item.hasDiscount} discount={item.discount} img={item.img} price={item.price} title={item.title}/>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
}
export default CategorySwiper;