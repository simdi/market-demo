import axios from 'axios';
import { ADD_MARKET, FETCH_MARKETS, SEARCH_MARKETS, GET_ERRORS, CLEAR_ERRORS, POST_LOADING, GET_LOADING, POST_SENT } from './types';

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
    dispatch(setPostSuccess(true));
    setTimeout(() => {
      dispatch(setPostSuccess(false));
    }, 3000);
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

export const searchMarketWithNameCategoryAndLocation = (data) => dispatch => {
  const { search, nearest, lng, lat } = data;

  let url = `/api/v1/markets/filterBy?search=${search}`;
  if(nearest) {
    url = `/api/v1/markets/filterBy?search=${search}&lat=${lat}&lng=${lng}`;
  }
  dispatch(setGetLoading(true));
  axios.get(url).then(res => {
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
export const setPostSuccess = (loading) => {
  return {
    type: POST_SENT,
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