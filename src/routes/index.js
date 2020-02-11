import React from 'react'
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom'

import Layout from 'components/layout'
import Catalog from 'components/catalog'


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
        <Route path = '/catalog'>
            <Layout>
                <Catalog />
            </Layout>
        </Route>
    </Switch>
)