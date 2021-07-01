import React from 'react';
import style from './scss/categories-card.module.scss';
import ComputerOutlinedIcon from '@material-ui/icons/ComputerOutlined';
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';
import ChildCareOutlinedIcon from '@material-ui/icons/ChildCareOutlined';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';
import GrainOutlinedIcon from '@material-ui/icons/GrainOutlined';
import ChangeHistoryOutlinedIcon from '@material-ui/icons/ChangeHistoryOutlined';
interface props{
    icon : string,
    title : string,
    product : string
}
const CategoriesCard=({icon , title , product} : props)=>{
    return(
        <div className={style['categories-container']}>
            <div className={style['categories-icon']}><ComputerOutlinedIcon/></div>
            <div className={style['categories-title']}>{title}</div>
            <div className={style['categories-product']}> + {product}</div>
        </div>
    )
}
export default CategoriesCard;