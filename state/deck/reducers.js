import { combineReducers } from 'redux';
import * as types from './types';

/* State Shape
{
    entries: object
      deckName: object
        name: string
        cards: array
          question: string
          answer: string
    selected: string
}
*/

const loadedReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case types.LOADED:
      return { ...state };
    case types.NEW_DECK:
      return { ...state, [payload.name]: { name: payload.name, cards: [] } };
    default:
      return state;
  }
};

const selectedReducer = (state = '', { type, payload }) => {
  switch (type) {
    case types.SELECTED:
      return payload.name;
    case types.NEW_DECK:
      return payload.name;
    default:
      return state;
  }
};

const reducer = combineReducers({
  entries: loadedReducer,
  selected: selectedReducer,
});

export default reducer;
