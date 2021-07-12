import React from 'react';
import style from './style/personal.module.scss';
import messages from "./messages/messages";
import BeenhereIcon from '@material-ui/icons/Beenhere';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Personal = () => {
    return (
        <div className={style['personal-container']}>
            <div className={style['head-icon']}><BeenhereIcon/></div>
            <h4 className={style['personal-title']}>{messages.title}</h4>
            <div className={style['personal-sub']}>{messages.subtitle}</div>
            <button className={style['personal-login-btn']}> <ExitToAppIcon/> {messages.login}</button>
            <span className={style['personal-sign-up']}>{messages.signup}</span>
        </div>
    )
}
export default Personal;