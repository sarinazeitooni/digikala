import React from 'react';
import Navigation from "./navigation/Navigation";
import TopHeader from "./topHeader/TopHeader";
import ResponsiveHeader from "./responsive/ResponsiveHeader";
import style from './style/header.module.scss';
import messages from "./messages/messages";

const Header = () => {
    return (
        <React.Fragment>
            <div className={style['responsive-show']}>
                <ResponsiveHeader/>
            </div>
            <div className={style['responsive-hidden']}>
                <TopHeader logo="https://www.digikala.com/static/files/bc60cf05.svg"/>
                <Navigation data={messages}/>
            </div>
        </React.Fragment>
    )
};
export default Header;