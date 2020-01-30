import React from 'react'
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom'

import Layout from 'components/layout'

export default (
    <Switch>
        <Route exact path = '/'>
            <Layout>
                <p>home</p>
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