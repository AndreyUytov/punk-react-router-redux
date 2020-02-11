import React from 'react'
import { connect } from 'react-redux'

import Search from './search'
import CatalogList from './catalog-list'
import {getBeers} from 'selectors'

const Catalog = (props) => {
    return (
        <React.Fragment>
            <Search />
            <CatalogList />
        </React.Fragment>
    )
}