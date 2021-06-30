import React from 'react';
import style from './scss/top-header.module.scss';
import messages from "../messages/messages";
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
interface props {
    logo : string
}
const TopHeader = ({logo} : props)=>{
    return(
        <div className={style['top-header-container']}>
            <div className={style['account-manager-container']}>
                <button className={style['sign-in-btn']}>{messages.signIn} <PersonOutlineOutlinedIcon/></button>
                <span className={style['vertical-line']}/>
                <ShoppingCartOutlinedIcon/>
            </div>
            <div className={style['input-logo-container']}>
                <img className={style['logo-image']} src={logo}/>
                <div className={style['search-input-container']}>
                    <SearchSharpIcon/>
                    <input className={style['search-input']} placeholder={messages.inputPlaceHolder} type="text"/>
                </div>
            </div>
        </div>
    )
};
export default TopHeader;