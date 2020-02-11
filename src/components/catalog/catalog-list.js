import React from 'react'
import {Link, Switch, Route, useParams, Redirect} from 'react-router-dom'

import Pagination from './pagination'


function Items ({beers}) {
    return beers.map((elem) => {
        return (
            <li key = {elem.id} className='product-list__item item-card'>
                <img src={elem.image_url} width="300" height="500" 
                    className="item-card__img"
                    alt="изображение товара"/>
                <div className='wrapper-card'>
                    <Link to={'/beer' + elem.id} className='item-card__title-link'>
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

function ListItems (props) {
    let { path, url } = useRouteMatch()
    return (
        <React.Fragment>
        <ul className='product-list'>
            <Switch>
                <Route exact path={path}>
                    <Redirect to = {`${url}/1`} />
                </Route>
                <Route path={`${path}/:page`}>
                    <ItemsByPage />
                </Route>
            </Switch>
        </ul>
        <Pagination />
        </React.Fragment>
    )
}