import { combineReducers } from 'redux'

import {
    ADD_TO_FAVOURITES,
    ADD_TO_BASKET,
    REMOVE_FROM_BASKET,
    REMOVE_FROM_FAVOURITES,
    SET_PAGE
} from 'actionsTypes'

function pageReducer (state = 1, {type, payload}) {
    switch (type) {
        case SET_PAGE:
            return payload.day
        default:
            return state
    }
}

export default (combineReducers({
    pageReducer
}))