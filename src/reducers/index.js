import { combineReducers } from 'redux'

import {
    ADD_TO_FAVOURITES,
    ADD_TO_BASKET,
    REMOVE_FROM_BASKET,
    REMOVE_FROM_FAVOURITES,
    SET_PAGE
} from 'actionsTypes'
import {indexById} from 'selectors.js'

function page (state = 1, {type, payload}) {
    switch (type) {
        case SET_PAGE:
            return payload.page
        default:
            return state
    }
}

function beers (state={}, {type, payload}) {
    return {...state, ...indexById(payload.beers)}
}

function beersByPage (state = {}, {type, payload}) {
    switch (type) {
        case ADD_TO_FAVOURITES:
        case ADD_TO_BASKET:
        case REMOVE_FROM_BASKET:
        case REMOVE_FROM_FAVOURITES:
        case SET_PAGE:
            return {...state,
                [payload.page] : {...beers(state[payload.page], {type, payload})}

            }
        default: 
            return state
    }
}

function favourites (state = 'love items', {type, payload}) {
    return state
}

export default (combineReducers({
    page,
    favourites
}))