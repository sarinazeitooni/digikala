import React, {useEffect, useState} from 'react';
import style from './scss/special-card.module.scss';
import Progress from 'react-progressbar';
import NumberFormat from 'react-number-format';
import data from "../texts/data";
import AccessTimeOutlinedIcon from '@material-ui/icons/AccessTimeOutlined';

interface props {
    title: string,
    img: string,
    price: number,
    discount: number,
    digiPlus: string,
    sold: number
}

const SpecialCard = ({sold, title, img, price, discount, digiPlus}: props) => {
    const [oldPrice, setOldPrice] = useState(price);
    const [Discount, setDiscount] = useState(100 - discount);
    const [NewPrice, setNewPrice] = useState((oldPrice * Discount) / 100);
    return (
        <div className={style['card-container']}>
            <div style={{background: `url("${img}")`}} className={style['card-img']}/>
            <div className={style['card-title']}>{title}</div>
            <div className={style['card-digi-plus']}>
                {digiPlus !== "" ? <img className={style['digi-plus-icon']}
                                        src="https://www.digikala.com/static/files/3854bc8d.svg"/> : <span/>}
                {digiPlus}
            </div>
            <div className={style['prices-container']}>
                <div className={style['discount']}>{discount}%</div>
                <div className={style['old-price']}><NumberFormat value={price} displayType={'text'}
                                                                  thousandSeparator={true}/></div>
                <div className={style['new-price']}>
                    <NumberFormat value={NewPrice} displayType={'text'} thousandSeparator={true}/>
                    <span className={style['currency-price']}>{data.currency}</span>
                </div>
            </div>
            <div className={style['progress-bar-container']}>
                <div className={style['bar-container']}><Progress className={style['progress-bar']} color="#ef394e" height='4px' completed={sold}/></div>
                <div className={style['progress-text']}> <span>{sold}%</span> {data.sold}</div>
                <div className={style['limited-time']}><span> 22:21:00</span><AccessTimeOutlinedIcon/></div>
            </div>

        </div>
    )
}
export default SpecialCard;