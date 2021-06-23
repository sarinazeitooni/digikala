import React from 'react';
import style from './scss/top-header.module.scss';
import messages from "./messages/messages";
const TopHeader = (({icon})=>{
    return(
        <React.Fragment>
            <div className={style['top-header-container']}>
                <div>
                    <img src={icon} alt='digikala-icon'/>
                    <div className={style['input-container']}>
                        <input placeholder={messages.placeholder} type='text'/>
                    </div>
                </div>
                <div>
                    <button className={style['entry']}>{messages.enter}</button>
                    <span className={style['vertical-line']}/>
                    icon
                </div>
            </div>
        </React.Fragment>
    )
});
export default TopHeader;