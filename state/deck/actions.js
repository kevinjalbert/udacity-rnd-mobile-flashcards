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

const newCard = (deckName, card) => ({
  type: types.NEW_CARD,
  payload: {
    deckName,
    card,
  },
});

export { loaded, newDeck, selected, newCard };
