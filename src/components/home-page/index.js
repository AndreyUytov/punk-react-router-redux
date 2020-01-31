import React from 'react'

import Search from './search'
import ProductBlock from './product-block'

export default function HomePage (props) {
    return (
        <React.Fragment>
            <Search />
            <ProductBlock />
        </React.Fragment>
    )
}