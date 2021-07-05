import React, {useState} from 'react';
import Navigation from "./navigation/Navigation";
import AdImage from "./Ad/AdImage";
import TopHeader from "./topHeader/topHeader";
import ResponsiveHeader from "./responsive/ResponsiveHeader";
import {isMobile} from 'react-device-detect';
import style from './styles/header.module.scss';
import messages from "./messages/messages";
const Header = () => {
    const [navigationData , setNavigationData] = useState(messages.navigation);
    return (
        <>
            <AdImage
                image="https://dkstatics-public.digikala.com/digikala-adservice-banners/d9a2c672a282ba83ac0b93fc94f7260a06525b17_1624882503.jpg?x-oss-process=image/quality,q_80"/>
            <div className={style['header']}>
                {
                    isMobile
                        ?
                        <ResponsiveHeader/>
                        : <>
                            <TopHeader logo="https://www.digikala.com/static/files/bc60cf05.svg"/>
                            <Navigation data={navigationData}/>
                        </>
                }
            </div>
            </>
    )
};
export default Header;