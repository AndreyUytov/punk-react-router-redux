import React from 'react'
import { connect } from 'react-redux'

import Search from './search'
import ProductBlock from './product-block'
import Pagination from './pagination'

function HomePage (props) {
    return (
        <React.Fragment>
            <Search />
            <ProductBlock {...props}/>
            <Pagination {...props}/>
        </React.Fragment>
    )
}

const mapStateToProps = (store) => {
    return {
        page: store.page,
        beers: store.beers
    } 
 }

export default connect (mapStateToProps)(HomePage)