import style from './style/digi.module.scss';
import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
interface IProps {
    data: {url : string , titleImage : string , menu : boolean , width : string , menuItem : []}
}
const Digi :React.FC<IProps> = ({data})=>{
    return(
        <div style={{width : data.width}} className={style['Digi-container']}>
            <div className={style['image-container']}>
                <img src={data.url}/>
            </div>
            <div className={style['info-container']}>
                {data.titleImage && <img className={style['title-image']} src={data.titleImage}/>}
                {data.menu && data.menuItem.map((item)=>{
                    return(
                        <div key={item} className={style['menu-item']}>{item}<ArrowBackIosIcon/></div>
                    )
                })}
            </div>
        </div>
    )
}
export default Digi;