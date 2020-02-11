import React from 'react'
import { connect } from 'react-redux'

import Search from 'components/search'
import CatalogList from './catalog-list'

const Catalog = (props) => {
    return (
        <React.Fragment>
            <Search />
            <CatalogList/>
        </React.Fragment>
    )
}

export default Catalog