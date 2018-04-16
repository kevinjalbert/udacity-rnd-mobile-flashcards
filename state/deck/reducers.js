import { combineReducers } from 'redux';
import * as types from './types';

/* State Shape
{
    decks: object
}
*/

const loadedReducer = (state = {}, { type, _payload }) => {
  switch (type) {
    case types.LOADED:
      return true;
    default:
      return state;
  }
};
const reducer = combineReducers({
  loaded: loadedReducer,
});

export default reducer;
