import React,{Fragment} from 'react';
import Header from "./header/Header";
import style from './style/main.module.scss';
import Ads from "./ads/Ads";
import SpecialContainer from "./specials/SpecialContainer";
import SponseredAds from "./sponseredAds/SponseredAds";
import Category from "./category/Category";
import Categories from "./categories/Categories";
import Data from "./categories/data/Data";
import Footer from "./footer/Footer";
import Personal from "./personal/Personal";
const Main = ()=>{
    return(
        <Fragment>
            <Header/>
            <Ads/>
            <SpecialContainer color="#ef394e" backImg="https://www.digikala.com/static/files/63494995.png"/>
            <SponseredAds/>
            <SpecialContainer color="#6bb927" backImg="https://www.digikala.com/static/files/63494995.png"/>
            <div className={style['mobile-show']}>
                <Personal/>
            </div>
            <Category/>
            <Categories items={Data}/>
            <Category/>
            <Footer/>
        </Fragment>
    )
}
export default Main;