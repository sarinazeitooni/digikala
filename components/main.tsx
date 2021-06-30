import React from 'react';
import Header from "./header/Header";
import Ads from "./ads/Ads";
import SpecialContainer from "./specials/SpecialContainer";
const Main = ()=>{
    return(
        <>
            <Header/>
            <Ads/>
            <SpecialContainer backImg="https://www.digikala.com/static/files/63494995.png"/>
        </>
    )
};
export default Main;