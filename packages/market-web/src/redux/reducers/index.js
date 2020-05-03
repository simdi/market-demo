import { combineReducers } from 'redux';
import { ADD_MARKET } from '../actions';

function markets(state = [], action) {
  switch (action.type) {
    case ADD_MARKET:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    default:
      return state
  }
}

const rootReducer = combineReducers({
  markets
});

export default rootReducer;