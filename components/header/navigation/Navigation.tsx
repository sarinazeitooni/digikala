import React,{Fragment} from 'react';
import style from './scss/navigation.module.scss';
import EditLocationOutlinedIcon from '@material-ui/icons/EditLocationOutlined';
import Digi from "./dropdown/digi/Digi";

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
                                <div className={style['drop-down']}>
                                    {item.digi && <Digi data={item.digiComponent}/>}
                                </div>
                                <span className={style['navbar-icon']}>{item.icon}
                                <span className={style['club-icon']}/>
                                </span>
                            </div>
                        </Fragment>
                    )
                })}
            </div>
        </div>
    )
}
export default Navigation;