import React from 'react'
import {connect} from 'react-redux'

import Header from 'components/header'
import Footer from 'components/footer'

function Layout (props) {
    return (
        <React.Fragment>
            <Header {...props}/>
            <main className='main-page conteiner'>
                {props.children}
            </main>
            <Footer {...props}/>
        </React.Fragment>
    )
}

const mapStateToProps = (store) => {
    return store  
 }

export default connect(mapStateToProps)(Layout)