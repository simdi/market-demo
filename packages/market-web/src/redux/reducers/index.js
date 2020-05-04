import { combineReducers } from 'redux';
import { markets } from './marketReducer';

const rootReducer = combineReducers({
  markets
});

export default rootReducer;