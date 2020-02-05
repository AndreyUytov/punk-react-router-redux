import React from 'react'
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom'

import Layout from 'components/layout'
import HomePage from 'components/home-page'

export default (
    <Switch>
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
        <Route exact path = '/'>
            <Redirect to = '/beers/1' />
        </Route>
        <Route path = '/beers/:page'>
            <Layout>
                <HomePage />
            </Layout>
        </Route>
    </Switch>
)