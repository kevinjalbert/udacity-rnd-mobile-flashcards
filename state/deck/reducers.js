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
    selectedDeck: string
}
*/

const entriesReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case types.DECKS_LOAD:
      return { ...state, ...payload.decks };
    case types.DECK_CREATE:
      return { ...state, [payload.name]: { name: payload.name, cards: [] } };
    case types.CARD_CREATE:
      const newState = { ...state };
      newState[payload.deckName].cards.push(payload.card);
      return newState;
    default:
      return state;
  }
};

const selectedReducer = (state = '', { type, payload }) => {
  switch (type) {
    case types.DECK_SELECT:
      return payload.name;
    case types.DECK_CREATE:
      return payload.name;
    default:
      return state;
  }
};

const reducer = combineReducers({
  entries: entriesReducer,
  selectedDeck: selectedReducer,
});

export default reducer;
