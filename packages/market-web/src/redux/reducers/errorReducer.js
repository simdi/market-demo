
import { GET_ERRORS } from '../actions/types';

export const errorState = {};

export default function(state = errorState, action) {
  switch (action.type) {
    case GET_ERRORS:
        return action.payload
    default:
        return state;
  }
}