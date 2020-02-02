import { combineReducers } from 'redux'

import {
    ADD_TO_FAVOURITES,
    ADD_TO_BASKET,
    REMOVE_FROM_BASKET,
    REMOVE_FROM_FAVOURITES,
    SET_PAGE
} from 'actionsTypes'

function homePage (state = 1, {type, payload}) {
    switch (type) {
        case SET_PAGE:
            return payload
        default:
            return state
    }
}

function favourites (state = 'love items', {type, payload}) {
    return state
}

export default (combineReducers({
    homePage,
    favourites
}))