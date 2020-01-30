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
            <Layout />
            <p>hello</p>
        </Route>
    </Switch>
)