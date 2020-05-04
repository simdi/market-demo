import { ADD_MARKET, GET_MARKET } from '../actions/types';

const initialState = {
  markets: [],
  market: {},
  loading: false
};

export function markets(state = initialState, action) {
  switch (action.type) {
    case ADD_MARKET:
      return {
        ...state,
        market: action.payload.market,
        loading: false
      }
    case GET_MARKET:
      return {
        ...state,
        markets: action.payload.markets,
        loading: false
      }
    default:
      return state
  }
}