import React, {useState} from 'react';
import Navigation from "./navigation/Navigation";
import AdImage from "./Ad/AdImage";
import TopHeader from "./topHeader/TopHeader";
import ResponsiveHeader from "./responsive/ResponsiveHeader";
import style from './style/header.module.scss';
import messages from "./messages/messages";

const Header = () => {
    return (
        <>
        <div className={style['responsive-hidden']}>
            <AdImage image="https://dkstatics-public.digikala.com/digikala-adservice-banners/d9a2c672a282ba83ac0b93fc94f7260a06525b17_1624882503.jpg?x-oss-process=image/quality,q_80"/>
        </div>
        <div className={style['responsive-show']}>
            <ResponsiveHeader/>
        </div>
        <div className={style['responsive-hidden']}>
            <TopHeader logo="https://www.digikala.com/static/files/bc60cf05.svg"/>
            <Navigation data={messages}/>
        </div>
</>
    )
};
export default Header;