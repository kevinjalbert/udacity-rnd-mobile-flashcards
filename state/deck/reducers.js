import { combineReducers } from 'redux';
import * as types from './types';

/* State Shape
{
    deck:
      loaded: array
        name: string
        cards: array
          question: string
          answer: string
}
*/

const loadedReducer = (state = [], { type, payload }) => {
  const newState = state.slice(0, state.length);

  switch (type) {
    case types.LOADED:
      return [
        {
          name: 'Ruby',
          cards: [
            {
              question: 'Test Question',
              answer: 'Test Answer',
            },
          ],
        },
        {
          name: 'React',
          cards: [
            {
              question: 'Test Question',
              answer: 'Test Answer',
            },
          ],
        },
      ];
    case types.NEW_DECK:
      newState.push({
        name: payload.name,
        cards: [],
      });

      return newState;
    default:
      return state;
  }
};

const reducer = combineReducers({
  loaded: loadedReducer,
});

export default reducer;
