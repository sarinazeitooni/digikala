import React from 'react';
import Card from "../ads/card/Card";
import style from './scss/sponsered-ad.module.scss';
import Ads from "./Ads/Ads";
const SponseredAds = () => {
    return (
        <div className={style['sponsered-ad-container']}>
            {Ads.map((item) => {
                    return (
                        <Card key={item} url={item}/>
                    )
                }
            )}
        </div>
    )
};
export default SponseredAds;