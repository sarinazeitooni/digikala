import React, {useState} from 'react';
import style from './styles/footer-support.module.scss';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import messages from './messages/messages'
const FooterSupport = ()=>{
    const [features , SetFeatures] = useState(messages.features);
    return(
        <div className={style['footer-support-container']}>
            <div className={style['back-to-top-container']}>
                <img src='https://www.digikala.com/static/files/2a4774d7.svg'/>
                <button className={style['back-to-top']}>{messages.backToTop} <span><ExpandLessIcon/></span></button>
            </div>
            <div className={style['support-text']}>{messages.support}</div>
            <div className={style['footer-features-container']}>
                {features.map((item)=>{
                    return(
                        <div className={style['feature-item-container']}>
                            <img src={item.icon}/>
                            <div>{item.text}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default FooterSupport;