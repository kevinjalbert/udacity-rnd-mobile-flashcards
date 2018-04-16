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

const selected = name => ({
  type: types.SELECTED,
  payload: {
    name,
  },
});

export { loaded, newDeck, selected };
