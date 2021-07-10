import React from 'react';
import style from './style/footer-columns.module.scss';
import messages from "./messages/messages";
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import { v4 as uuidv4 } from 'uuid';

const links = [
    <InstagramIcon/>,
    <TwitterIcon/>,
    <LinkedInIcon/>,
    <GroupWorkIcon/>
]
const FooterColumns = () => {
    return (
        <div className={style['footer-columns-container']}>
            {
                messages.columns.map((item) => {
                    return (
                        <div className={style['column']} key={uuidv4()}>
                            <div className={style['column-title']}>{item.title}</div>
                            <div className={style['column-item-container']}>
                                {item.items && item.items.map((text) => {
                                    return (
                                        <div className={style['column-item']}>{text}</div>
                                    )
                                })}
                            </div>
                            {item.social && <>
                                <div className={style['links-container']}>
                                    <div className={style['links']}>
                                        {links.map((linkItem)=>{
                                            return(
                                                <span key={uuidv4()}>
                                                    {linkItem}
                                                </span>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className={style['column-title']}>{item.news && item.news}</div>
                                <div className={style['input-email-container']}>
                                    {item.email && <input placeholder={item.email} type='text' className={style['email-input']}/>}
                                    {item.submit &&
                                    <button className={style['submit-button']} type='submit'>{item.submit}</button>}
                                </div>
                            </>}
                        </div>
                    )
                })
            }
        </div>
    )
}
export default FooterColumns;