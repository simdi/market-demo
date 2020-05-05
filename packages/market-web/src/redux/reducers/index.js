import { combineReducers } from 'redux';
import { market } from './marketReducer';

const rootReducer = combineReducers({
  market
});

export default rootReducer;