import React from "react";
import style from './style/all-categories.module.scss'
import CategoryDetail from "./items/categoryDetail";

interface IProps {
    data: {categoryTitle : string , img : string , }[]
}
const AllCategories: React.FC<IProps> = ({data}) => {
    return (
         <div className={style['all-categories']}>
                {data.map((index) => {
                    return (
                        <React.Fragment key={index.categoryTitle}>
                            <div className={style['category-item']}>{index.categoryTitle}</div>
                            <div className={style['category-detail-container']}>
                                <CategoryDetail img={index.img ? index.img : ''} title={index.categoryTitle} data={index.items}/>
                            </div>
                        </React.Fragment>
                    )
                })}
            </div>
    )
}
export default AllCategories;