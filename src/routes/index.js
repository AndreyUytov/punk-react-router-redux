import React from 'react'
import {
    Switch,
    Route
} from 'react-router-dom'

import Layout from 'components/layout'
import HomePage from 'components/home-page'

export default (
    <Switch>
        <Route exact path = '/'>
            <Layout>
                <HomePage />
            </Layout>
        </Route>
        <Route path= '/favourites'>
            <Layout>
                <p>favourites</p>
            </Layout>
        </Route>
        <Route path= '/basket'>
            <Layout>
                <p>basket</p>
            </Layout>
        </Route>
    </Switch>
)