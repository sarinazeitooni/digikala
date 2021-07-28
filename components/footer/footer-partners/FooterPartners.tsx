import React from 'react';
import style from './style/footer-partners.module.scss';
import urls from "./urls/urls";
import { v4 as uuidv4 } from 'uuid';
const FooterPartners = ()=>{
    return(
        <div className={style['partners-container']}>
            {
                urls.map((item:string)=>{
                    return(
                        <div key={uuidv4()} className={style['partner']}>
                            <img src={item}/>
                        </div>
                    )
                })
            }
        </div>
    )
};
export default FooterPartners;