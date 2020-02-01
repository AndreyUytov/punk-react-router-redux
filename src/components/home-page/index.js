import React from 'react'

import Search from './search'
import ProductBlock from './product-block'
import Pagination from './pagination'

export default function HomePage (props) {
    return (
        <React.Fragment>
            <Search />
            <ProductBlock />
            <Pagination currentPage = {4}/>
        </React.Fragment>
    )
}