import { combineReducers } from 'redux'

import {
    ADD_TO_FAVOURITES,
    ADD_TO_BASKET,
    REMOVE_FROM_BASKET,
    REMOVE_FROM_FAVOURITES,
    SET_PAGE,
    FETCH_BEERS_INIT,
    FETCH_BEERS_SUCCESS,
    FETCH_BEERS_FAILURE
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

function beers (state = {}, {type, payload}) {
    switch (type) {
        case FETCH_BEERS_SUCCESS:
            return {...state, ...indexById(payload.beers) }
        default:
            return state
    }
}

const initialState = {
    1: {
        beers:[],
        isLoading: true,
        isError: false
    }
}

function beersByPage (state = initialState, {type, payload}) {
    switch (type) {
        case SET_PAGE:
        case FETCH_BEERS_INIT:
            return {...state,
                [payload.page] : {sLoading: true, isError: false, beers: []}
            }
        case FETCH_BEERS_SUCCESS:
            return {...state,
                [payload.page] : {
                    beers: [...payload.beers.map(i => i.id)], 
                    isLoading: false, isError: false}
            }
        case FETCH_BEERS_FAILURE:
            return {...state,
            [payload.page] : {isLoading: false, isError: payload.error}
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
    beers,
    beersByPage,
    favourites
}))