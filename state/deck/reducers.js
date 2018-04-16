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

const loadedReducer = (state = [], { type, _payload }) => {
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
    default:
      return state;
  }
};
const reducer = combineReducers({
  loaded: loadedReducer,
});

export default reducer;
