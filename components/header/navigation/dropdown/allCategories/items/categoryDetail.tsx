import React from "react";
import style from './style/category-detail.module.scss';
import messages from "../../../../messages/messages";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
interface IProps {
    data: {itemTitle : string , itemOption : [] }[],
    title : string,
    img: string
}

const CategoryDetail: React.FC<IProps> = ({title ,data,img}) => {
    return (
        <div className={style['category-detail-container']}>
            <h2 className={style['category-title']}> {messages.categoryText} {title} <ArrowBackIosIcon/></h2>
            <div className={style['category-detail-container-flex']}>
                {data && data.map((index) => {
                    return (
                        <div key={index.itemTitle} className={style['group-detail-item']}>
                            <h4 className={style['detail-title']}>{index.itemTitle} <ArrowBackIosIcon/></h4>
                            {index.itemOption &&
                            <div className={style['detail-items']}>
                                {index.itemOption.map((item)=>{
                                    return(
                                        <div key={item} className={style['detail-item']}>{item}</div>
                                    )
                                })}
                            </div>
                            }
                            {
                                img !== '' ? <img src={img}/> : ''
                            }
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default CategoryDetail;