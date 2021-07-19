import React, {Fragment} from 'react';
import style from './scss/navigation.module.scss';
import EditLocationOutlinedIcon from '@material-ui/icons/EditLocationOutlined';
import Digi from "./dropdown/digi/Digi";
import AllCategories from "./dropdown/allCategories/allCategories";

interface IProps {
    data: { location: string, navigation: { title: string, digi: boolean, discount: boolean, categories: boolean, icon: any, categoriesList: [], digiComponent: {} }[] }
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
                            <div className={style['darker-back']}/>
                            <div className={style['navbar-item']}>{item.title}
                                {item.digi &&
                                <div className={style['drop-down']}>
                                    <Digi data={item.digiComponent}/>
                                </div>
                                }
                                <span className={style['navbar-icon']}>{item.icon}
                                    <span className={style['club-icon']}/>
                                </span>
                                {item.categories && <div className={style['categories']}>
                                    <AllCategories data={item.categoriesList}/>
                                </div>}
                            </div>
                        </Fragment>
                    )
                })}
            </div>
        </div>
    )
}
export default Navigation;