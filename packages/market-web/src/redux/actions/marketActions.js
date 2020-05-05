import axios from 'axios';
import { ADD_MARKET, FETCH_MARKETS, GET_ERRORS, CLEAR_ERRORS, POST_LOADING } from './types';

// Add Post
export const addMarket = postData => dispatch => {
  dispatch(clearErrors());
  axios.post('/api/v1/markets', postData).then(res => {
      dispatch({
        type: ADD_MARKET,
        payload: (res.data.data.length > 0) ? res.data.data[0] : []
      })
  }).catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data.errors
      });
  });
};

// Get Posts
export const getMarkets = () => dispatch => {
  console.log('Actual API');
  dispatch(setPostLoading());
  axios.get('/api/v1/markets').then(res => {
    console.log('Res', res);
      dispatch({
          type: FETCH_MARKETS,
          payload: (res.data.length > 0) ? res.data : []
      });
  }).catch(err => {
    console.log('Err', err);
      dispatch({
          type: FETCH_MARKETS,
          payload: null
      });
  });
};

// Set loading state
export const setPostLoading = () => {
  return {
    type: POST_LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};