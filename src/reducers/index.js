import { combineReducers } from 'redux'

import {
    ADD_TO_FAVOURITES,
    ADD_TO_BASKET,
    REMOVE_FROM_BASKET,
    REMOVE_FROM_FAVOURITES,
    SET_PAGE
} from 'actionsTypes'

function reducer (initialstate = 'state') {
    return initialstate
}

export default (combineReducers({
    reducer
}))