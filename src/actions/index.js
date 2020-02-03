import request from 'superagent'

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

export const fetchBeersAction = () => async (dispatch, page) => {
    dispatch({type: FETCH_BEERS_INIT})

    try {
        const {beers} = await request.get(
            `https://api.punkapi.com/v2/beers?page=${page}&per_page=9`
        )
        console.log(beers)
        dispatch({
            type: FETCH_BEERS_SUCCESS,
            payload: {beers}
        })
    } catch (error) {
        dispatch({
            type: FETCH_BEERS_FAILURE,
            payload: error,
            error: true
        })
    }
}