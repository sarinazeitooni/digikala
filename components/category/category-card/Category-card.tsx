import React, {useState} from 'react';
import style from './scss/category-card.module.scss'
import NumberFormat from "react-number-format";
import data from "../../specials/texts/data";

interface props {
    discount: number,
    price: number,
    title: string,
    img: string,
    hasDiscount: boolean
}

const CategoryCard = ({discount, price, title, img, hasDiscount}: props) => {
    const [oldPrice, setOldPrice] = useState(price);
    const [Discount, setDiscount] = useState(100 - discount);
    const [NewPrice, setNewPrice] = useState((oldPrice * Discount) / 100);
    return (
        <div className={style['card-container']}>
            <div style={{background: `url("${img}")`}} className={style['card-img']}/>
            <div className={style['card-title']}>{title}</div>
            <div className={style['prices-container']}>
                {hasDiscount ? <>
                    <div className={style['discount']}>{discount}%</div>
                    <div className={style['old-price']}><NumberFormat value={price} displayType={'text'}
                                                                      thousandSeparator={true}/></div>
                </> : ''}

                <div className={style['new-price']}>
                    <NumberFormat value={NewPrice} displayType={'text'} thousandSeparator={true}/>
                    <span className={style['currency-price']}>{data.currency}</span>
                </div>
            </div>
        </div>
    )
}
export default CategoryCard;