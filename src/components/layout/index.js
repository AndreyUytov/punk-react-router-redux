import React from 'react'

import Header from 'components/header'
import Footer from 'components/footer'

export default function Layout (props) {
    return (
        <React.Fragment>
            <Header />
            {props.children}
            <Footer />
        </React.Fragment>
    )
}