/* eslint-disable */
import React,{Fragment} from 'react';
import style from './scss/navigation.module.scss';
import EditLocationOutlinedIcon from '@material-ui/icons/EditLocationOutlined';
import Digi from "./dropdown/digi/Digi";

// https://www.pluralsight.com/guides/how-to-show-and-hide-reactjs-components

interface IProps {
    data: { location: string, navigation: { title: string, digi: boolean, icon : any , digiComponent: { url: string } }[] }
}
const Navigation: React.FC<IProps> = ({data}) => {
    return (
        <div className={style['navigation-container']}>
            <div className={style['location-container']}>
                <span>{data.location}</span>
                <span><EditLocationOutlinedIcon/></span>
            </div>
            <div className={style['navbar-container']}>
                {data.navigation.map((item) => {
                    return (
                        <Fragment key={item.title}>
                            <div className={style['navbar-item']}>{item.title}
                                {/*<span className={style['navbar-icon']}>{item.icon}</span>*/}
                                <div className={style['drop-down']}>
                                    {item.digi && <Digi data={item.digiComponent}/>}
                                    {/*{item.icon && }*/}
                                </div>
                            </div>
                        </Fragment>
                    )
                })}
            </div>
        </div>
    )
}
export default Navigation;