import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import data from "../../specials/texts/data";
import CategoryCard from "../category-card/CategoryCard";
import { v4 as uuidv4 } from 'uuid';

const CategorySwiper = ()=>{
    return(
        <Swiper style={{'--swiper-navigation-color': 'black' , '--swiper-navigation-size' : '26px'}} slidesPerView={6} navigation>
                {data.cards.map((item)=>{
                    return(
                        <SwiperSlide key={uuidv4()}>
                            <CategoryCard hasDiscount = {item.hasDiscount} discount={item.discount} img={item.img} price={item.price} title={item.title}/>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
    )
}
export default CategorySwiper;