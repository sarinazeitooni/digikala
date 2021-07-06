import React, {useState} from 'react';
import style from './style/footer-about.module.scss';
import messages from "./messages/messages";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
const FooterAbout =()=>{
    const [btnValue , setBtnValue] = useState(true);
    function changeBtnValue(){
        setBtnValue(!btnValue);
    }
    return(
        <>
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
                    <p className={ btnValue ?`${style["less"]} ${style["about-paragraph"]}`: `${style["more"]} ${style["about-paragraph"]}`}>{messages.paragraph}</p>
                    <button onClick={changeBtnValue} className={style['more-toggle']}>{btnValue ? messages.more : messages.less} <span><ChevronLeftIcon/></span></button>
                </div>
            </div>
            <div className={style['copy-right']}>{messages.copyRight}</div>
            <div className={style['copy-right-responsive']}>{messages.copyResponsive}</div>
        </>
    )
};
export default FooterAbout;