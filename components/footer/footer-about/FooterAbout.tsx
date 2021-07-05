import React from 'react';
import style from './style/footer-about.module.scss';
import messages from "./messages/messages";
const FooterAbout =()=>{
    return(
        <div className={style['about-container']}>
            <div className={style['trust-container']}>
                {messages.urls.map((item)=>{
                    return(
                        <img className={style['trust-items']} src={item}/>
                    )
                })}
            </div>
            <div className={style['about-text']}>
                <div className={style['about-title']}>{messages.title}</div>
                <p className={style['about-paragraph']}>{messages.paragraph}</p>
                <button className={style['more-toggle']}></button>
            </div>
        </div>
    )
};
export default FooterAbout;