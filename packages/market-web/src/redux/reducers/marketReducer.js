import { ADD_MARKET, FETCH_MARKETS, GET_LOADING, POST_LOADING, SEARCH_MARKETS, POST_SENT } from '../actions/types';

export const marketState = {
  markets: [],
  market: {},
  loading: false,
  postLoading: false,
  postSuccess: false
};

export const market = (state = marketState, action) => {
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
    case SEARCH_MARKETS:
      return {
        ...state,
        markets: action.payload,
        loading: false
      }
    case GET_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    case POST_LOADING:
      return {
        ...state,
        postLoading: action.payload
      }
    case POST_SENT:
      return {
        ...state,
        postSuccess: action.payload
      }
    default:
      return state
  }
}