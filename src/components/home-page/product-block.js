import React, {
    usestate,
    useEffect,
    useReducer,
    useState
} from 'react'
import {NavLink} from 'react-router-dom'

const useDataApi = (initialPage, initialData) => {
    const [page, setPage] = useState(initialPage);

    const [state, dispatch] = useReducer()
}

export default function ProductBlock (props) {
    return (
        <ul className='product-list'>
            <li className='product-list__item item-card'>
                <img className='item-card__img'
                    scr='' alt="изображение товара"
                    title = 'изображение товара' 
                />
                <NavLink to='/id' className='item-card__title-link'>
                    Name the product
                </NavLink>
                <p className='item-card__description'>
                    Описание товара в кратце
                    <button className='item-card__about-btn btn'
                     type='button'>
                        Подробнее
                     </button>
                </p>
                <button className='item-card__buy-btn btn'
                 type='button'>
                    Купить
                 </button>
            </li>
        </ul>
    )
}