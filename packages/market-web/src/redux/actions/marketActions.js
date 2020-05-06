import axios from 'axios';
import { ADD_MARKET, FETCH_MARKETS, SEARCH_MARKETS, GET_ERRORS, CLEAR_ERRORS, POST_LOADING, GET_LOADING } from './types';

// Add Post
export const addMarket = postData => dispatch => {
  dispatch(clearErrors());
  dispatch(setPostLoading(true));
  axios.post('/api/v1/markets', postData).then(res => {
    dispatch({
      type: ADD_MARKET,
      payload: (res.data.length > 0) ? res.data : []
    });
    dispatch(setPostLoading(false));
  }).catch(err => {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data.errors
    });
    dispatch(setPostLoading(false));
  });
};

// Get Markets
export const getMarkets = () => dispatch => {
  dispatch(setGetLoading(true));
  axios.get('/api/v1/markets').then(res => {
    dispatch({
        type: FETCH_MARKETS,
        payload: (res.data.length > 0) ? res.data : []
    });
    dispatch(setGetLoading(false));
  }).catch(err => {
    dispatch({
      type: FETCH_MARKETS,
      payload: []
    });
    dispatch(setGetLoading(false));
  });
};

export const searchMarketWithNameCategoryAndLocation = ({ search }) => dispatch => {
  dispatch(setGetLoading(true));
  axios.get(`/api/v1/markets/filterBy?search=${search}`).then(res => {
    dispatch({
        type: SEARCH_MARKETS,
        payload: (res.data.length > 0) ? res.data : []
    });
    dispatch(setGetLoading(false));
  }).catch(err => {
    dispatch({
      type: SEARCH_MARKETS,
      payload: []
    });
    dispatch(setGetLoading(false));
  });
};

// Set loading state
export const setPostLoading = (loading) => {
  return {
    type: POST_LOADING,
    payload: loading
  };
};

export const setGetLoading = (loading) => {
  return {
    type: GET_LOADING,
    payload: loading
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};