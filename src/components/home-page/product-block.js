import React, {
    useEffect
} from 'react'
import {Link} from 'react-router-dom'

import {fetchBeersAction} from 'actions'

function renderItems (beers) {
    return beers.map((elem) => {
        return (
            <li key = {elem.id} className='product-list__item item-card'>
                <img src={elem.image_url} width="300" height="500" 
                    className="item-card__img"
                    alt="изображение товара"/>
                <div className='wrapper-card'>
                    <Link to={'/beers' + elem.id} className='item-card__title-link'>
                        {elem.name}
                    </Link>
                    <p className='item-card__description'>
                        {elem.description.slice(0, 75) + '...'}
                    </p>
                    <button className='item-card__about-btn btn'
                        type='button'>
                            Подробнее
                    </button>
                    <button className='item-card__buy-btn btn'
                    type='button'>
                        Купить
                    </button>
                </div>
            </li>
        )
    })
}

function generetListContent (beers, isLoading, isError) {
    if (isLoading) {
        return (<div>...Loading</div>)
    } else if (isError) {
        return (<div>Something wrong!</div>)
    } else {
        return (
            renderItems(beers)
        )
    }
}

export default function ProductBlock (props) {

    let {dispatch, page, beers, isLoading, isError} = props

    useEffect(() => {
        fetchBeersAction(dispatch, page)
    },[page])

    return (
        <ul className='product-list'>
            {generetListContent(beers, isLoading, isError)}
        </ul>
    )
}