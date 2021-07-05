import React from 'react';
import FooterSupport from "./footer-support/FooterSupport";
import style from './styles/footer.module.scss';
import messages from "./footer-support/messages/messages";
import FooterColumns from "./footer-columns/FooterColumns";
import FooterDownloads from "./footer-downloads/FooterDownloads";
import FooterPartners from "./footer-partners/FooterPartners";
import FooterAbout from './footer-about/FooterAbout';
const Footer = ()=>{
    return(
        <div className={style['footer-container']}>
            <FooterSupport/>
            <FooterColumns/>
            <FooterDownloads/>
            <FooterAbout/>
            <div className={style['copy-right']}>{messages.copyRight}</div>
            <FooterPartners/>
        </div>
    )
}
export default Footer;