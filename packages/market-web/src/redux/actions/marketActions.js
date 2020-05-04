import axios from 'axios';

import { ADD_MARKET, GET_MARKETS, GET_ERRORS } from './types';

// Add Post
export const addMarket = postData => dispatch => {
  dispatch(clearErrors());
    axios.post('/v1/api/markets', postData).then(res => {
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
  dispatch(setPostLoading());
    axios.get('/v1/api/markets').then(res => {
        dispatch({
            type: GET_MARKETS,
            payload: (res.data.data.length > 0) ? res.data.data : []
        });
    }).catch(err => {
        dispatch({
            type: GET_MARKETS,
            payload: null
        });
    });
};