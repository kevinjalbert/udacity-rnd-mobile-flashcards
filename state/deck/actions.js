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

const selected = key => ({
  type: types.SELECTED,
  payload: {
    key,
  },
});

export { loaded, newDeck, selected };
