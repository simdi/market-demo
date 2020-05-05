import { ADD_MARKET, FETCH_MARKETS } from '../actions/types';

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
        market: action.payload,
        loading: false
      }
    case FETCH_MARKETS:
      return {
        ...state,
        markets: action.payload,
        loading: false
      }
    default:
      return state
  }
}