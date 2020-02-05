export const getBeersById = (state, id) => {
    return state.beers[id]
  }
  
  export const getBeers = (state, page) => {
    return state.beersByPage[page].beers.map((id) => {
      return getBeersById(state, id)
    })
  }
  
  export function indexById (arr) {
    return Object.fromEntries(arr.reduce((res, cur) => {
        return res.set(cur.id, cur)
    }, new Map()))
  }