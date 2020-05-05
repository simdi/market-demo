import { ADD_MARKET, FETCH_MARKETS, GET_LOADING } from '../actions/types';

export const marketState = {
  markets: [],
  market: {},
  loading: false
};

export const market = (state = marketState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case ADD_MARKET:
      return {
        ...state,
        markets: action.payload,
        loading: false
      }
    case FETCH_MARKETS:
      return {
        ...state,
        markets: action.payload,
        loading: false
      }
    case GET_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}