import React from 'react';
import style from './scss/ad-image.module.scss';
interface props {
    image : string
}
const AdImage = ({image} : props)=>{
    return(
        <div className={style['ad-image-container']}>
            <img style={{background : `url("${image}")` }} className={style['ad-image']}/>
        </div>
    )
};
export default AdImage;