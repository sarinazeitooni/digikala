import React from 'react';
import style from './scss/card.module.scss';
interface props {
    url : string
}
const Card = ({url} : props)=>{
    return(
        <img className={style['image-card']} src={url}/>
    )
};
export default Card;