import { combineReducers } from 'redux';
import { market } from './marketReducer';
import auth from './authReducer';
import errors from './errorReducer';

const rootReducer = combineReducers({
  market,
  auth,
  errors
});

export default rootReducer;