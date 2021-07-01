import React from 'react';
import Header from "./header/Header";
import Ads from "./ads/Ads";
import SpecialContainer from "./specials/SpecialContainer";
import SponseredAds from "./sponseredAds/SponseredAds";
import Category from "./category/Category";
const Main = ()=>{
    return(
        <>
            <Header/>
            <Ads/>
            <SpecialContainer color="#ef394e" backImg="https://www.digikala.com/static/files/63494995.png"/>
            <SponseredAds/>
            <SpecialContainer color="#6bb927" backImg="https://www.digikala.com/static/files/63494995.png"/>
            <Category/>
        </>
    )
};
export default Main;