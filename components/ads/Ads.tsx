import React from 'react';
import AdImage from "../header/Ad/AdImage";
import style from './scss/ad.module.scss';
import Card from "./card/Card";
import SwiperAd from "./swiper/swiper";
const Ads = () => {
    return (
        <>
            <div className={style['ad-image-container-center']}>
                <AdImage
                    image="https://dkstatics-public.digikala.com/digikala-adservice-banners/775c8826bf7ee83df851eae649789af09b732967_1624731045.jpg?x-oss-process=image/quality,q_80"/>
            </div>
            <div className={style['swiper-and-card-container']}>
                <div className={style['card-container']}>
                    <Card url="https://dkstatics-public.digikala.com/digikala-adservice-banners/4ff2cc7892a1580956c5983878f5e8dcb501189b_1624191349.jpg?x-oss-process=image/quality,q_80"/>
                    <Card url="https://dkstatics-public.digikala.com/digikala-adservice-banners/fee0f73a7ec32027a93c8d4c7bbc788680024456_1624648034.jpg?x-oss-process=image/quality,q_80"/>
                </div>
                <div className={style['swiper-container']}>
                    <SwiperAd/>
                </div>
            </div>
        </>
    )
};
export default Ads;