import { combineReducers } from 'redux';
import * as types from './types';

/* State Shape
{
    deckName:
      name: string
      cards: array
        question: string
        answer: string
}
*/

const loadedReducer = (state = [], { type, payload }) => {
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
        },
        react: {
          name: 'React',
          cards: [
            {
              question: 'Test Question',
              answer: 'Test Answer',
            },
          ],
        },
      };
    case types.NEW_DECK:
      return { ...state, [payload.name]: { name: payload.name, cards: [] } };
    default:
      return state;
  }
};

const reducer = combineReducers({
  entries: loadedReducer,
});

export default reducer;
