import React from 'react';
import style from './scss/navigation.module.scss';
import EditLocationOutlinedIcon from '@material-ui/icons/EditLocationOutlined';

interface props {
    data: Array
}

const Navigation = ({data}: props) => {
    return (
        <div className={style['navigation-container']}>
            <div className={style['location-container']}>
                <span>{data.location}</span>
                <span><EditLocationOutlinedIcon/></span>
            </div>
            <div className={style['navbar-container']}>
                {data.navigation.map((item)=>{
                    return(
                        <div className={style['navbar-item']}>{item.title}</div>
                    )
                })}
            </div>
        </div>
    )
};
export default Navigation;