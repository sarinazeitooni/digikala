import React from 'react';
import style from './scss/category.module.scss';
import texts from "./texts/texts";
import CategorySwiper from "./category-swiper/CategorySwiper";
import SingleItem from "./single-item/SingleItem";

const Category = () => {
    return (
        <div className={style['category-container']}>
            <div className={style['category-swiper-container']}>
                <div className={style['swiper-header']}>
                    <div className={style['border-dark']}>
                        <h3 className={style['category-title']}>{texts.categorySwiperContainer}</h3>
                        <span className={style['category-subtitle']}>{texts.categorySubTitle}</span>
                    </div>
                    <div className={style['border-light']}/>
                </div>
                <div className={style['swiper-container']}><CategorySwiper/></div>
            </div>
            <div className={style['single-item-advice']}>
                <h3 className={style['single-item-title']}>{texts.singlePicTitle}</h3>
                <span className={style['progress']}></span>
                <SingleItem/>
            </div>
        </div>
    )
}
export default Category;