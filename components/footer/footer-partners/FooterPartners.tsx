import React from 'react';
import style from './style/footer-partners.module.scss';
import urls from "./urls/urls";
const FooterPartners = ()=>{
    return(
        <div className={style['partners-container']}>
            {
                urls.map((item)=>{
                    return(
                        <div className={style['partner']}>
                            <img src={item}/>
                        </div>
                    )
                })
            }
        </div>
    )
};
export default FooterPartners;