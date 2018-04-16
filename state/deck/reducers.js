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
      return {
        ruby: {
          name: 'Ruby',
          cards: [
            {
              question: 'Test Question',
              answer: 'Test Answer',
            },
          ],
          selected: false,
        },
        react: {
          name: 'React',
          cards: [
            {
              question: 'Test Question',
              answer: 'Test Answer',
            },
          ],
          selected: false,
        },
      };
    case types.NEW_DECK:
      return { ...state, [payload.name]: { name: payload.name, cards: [] } };
    default:
      return state;
  }
};

const selectedReducer = (state = '', { type, payload }) => {
  switch (type) {
    case types.SELECTED:
      return payload.key;
    default:
      return state;
  }
};

const reducer = combineReducers({
  entries: loadedReducer,
  selected: selectedReducer,
});

export default reducer;
