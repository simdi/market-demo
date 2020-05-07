import axios from 'axios';
import { GET_ERRORS, SET_CURRENT_USER } from './types';
import history from '../../helpers/history';
import helpers from '../../helpers/helpers';
import jwtDecode from 'jwt-decode';

// Login User
export const loginUser = (userData) => dispatch => {
  axios.post('/api/v1/auth/login', userData).then(res => {
    // Save to local storage
    const { access_token } = res.data;
    localStorage.setItem('jwtToken', access_token);
    // Set access_token to auth header
    helpers.setAuthToken(access_token);
    // Decode access_token to get user data
    const decoded = jwtDecode(access_token);
    // Set current user
    dispatch(setCurrentUser(decoded));
    history.push('/admin/markets');
  }).catch(err => {
    dispatch({
      type: GET_ERRORS,
      payload: { email: err.response.data.errors }
    });
  });
}

// Logout User
export const logoutUser = () => dispatch => {
  // Remove user from local storage
  localStorage.removeItem('jwtToken');
  // Remove auth header from future requests
  helpers.setAuthToken(false);
  // Set current user to an empty object, and isAuthenticated to false
  dispatch(setCurrentUser({}));
}

// Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  }
}