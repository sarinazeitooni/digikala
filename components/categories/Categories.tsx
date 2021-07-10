import React, {useState} from 'react';
import style from './scss/categories.module.scss';
import CategoriesCard from "./categories-card/CategoriesCard";
import { v4 as uuidv4 } from 'uuid';
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
                            <CategoriesCard key={uuidv4()} icon={item.icon} title={item.title} product={item.product}/>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Categories;