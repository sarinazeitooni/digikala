import React from 'react';
import style from './scss/responsive-header.module.scss';
import MenuIcon from '@material-ui/icons/Menu';
import NotListedLocationOutlinedIcon from '@material-ui/icons/NotListedLocationOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import messages from "../messages/messages";
const ResponsiveHeader = () => {
    return (
        <div className={style['mobile-header']}>
            <div className={style['mobile-header-row']}>
                <div className={style['menu-icon']}>
                    <MenuIcon/>
                </div>
                <div className={style['digikala-icon']}>
                    <img src='https://www.digikala.com/static/files/d6861d76.svg'/>
                </div>
                <div className={style['chat-box-icon']}>
                    <NotListedLocationOutlinedIcon/>
                </div>
            </div>
            <div className={style['mobile-header-row'] + " " + style['input-row']}>
                <div className={style['input-container']}>
                    <SearchOutlinedIcon/>
                    <input placeholder={messages.inputPlaceHolder} type='text'/>
                </div>
                <div className={style['login-container']}>
                    <span>{messages.logIn}</span>
                    <ExitToAppOutlinedIcon/>
                </div>
                <div className={style['basket-container']}>
                    <ShoppingBasketOutlinedIcon/>
                </div>
            </div>
            <div className={style['mobile-header-row '] + " " + style['location-row']}>
                <span className={style['location-text']}>
                    <span>{messages.location}</span>
                    <RoomOutlinedIcon/>
                </span>
                <span className={style['arrow-icon']}><ArrowBackIosOutlinedIcon/></span>
            </div>
        </div>
    )
};
export default ResponsiveHeader;