import * as types from './types';

const loaded = decks => ({
  type: types.LOADED,
  payload: {
    decks,
  },
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
