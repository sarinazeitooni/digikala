import React, {useState} from 'react';
import style from './scss/categories.module.scss';
import CategoriesCard from "./categories-card/CategoriesCard";
interface props{
    items : []
}
const Categories = ({items} : props)=>{
    const [data, setData] = useState(items.data);
    return(
        <div className={style['categories-container']}>
            <h3>{items.categoriesTitle}</h3>
            <div className={style['items-container']}>
                {
                    data.map((item)=>{
                        return(
                            <CategoriesCard icon={item.icon} title={item.title} product={item.product}/>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Categories;