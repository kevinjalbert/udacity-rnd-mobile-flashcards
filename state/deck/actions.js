import * as types from './types';

const loaded = () => ({
  type: types.LOADED,
});

const newDeck = name => ({
  type: types.NEW_DECK,
  payload: {
    name,
  },
});

export { loaded, newDeck };
