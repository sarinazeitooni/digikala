import React, {useEffect, useState} from 'react';
import style from './scss/specials.module.scss';
import data from "./texts/data";
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import { Swiper, SwiperSlide } from 'swiper/react';
import SpecialCard from "./specialCard/SpecialCard";
interface props{
    backImg : string,
    color: string
}
const SpecialContainer = ({color, backImg} : props)=>{
    const [Data,setData] = useState(data.cards);
    return(
        <div style={{backgroundColor : color}} className={style['special-container']}>
            <div style={{background: `url("${backImg}")`}} className={style['special-img']}/>
            <button className={style['specials-btn']}>{data.getAll} <ArrowBackIosOutlinedIcon/></button>
            <div className={style['special-swiper-container']}>
                <Swiper slidesPerView={4} pagination={{ clickable: true }}>
                    {Data.map((item)=>{
                        return(
                            <SwiperSlide>
                                <SpecialCard sold={item.sold} digiPlus={item.digiPlus} discount={item.discount} img={item.img} price={item.price} title={item.title}/>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    )
}
export default SpecialContainer;