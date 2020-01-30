import React from 'react'

import Navigation from './navigation'

export default function HeaderPage (props) {
    return (
        <React.Fragment>
            <header className='header-page'>
                <h1 className='header-page__title'>PUNK-API</h1>
                <Navigation />
            </header>
        </React.Fragment>
    )
}