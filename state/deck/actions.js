import * as types from './types';

const decksLoaded = decks => ({
  type: types.DECKS_LOAD,
  payload: {
    decks,
  },
});

const deckCreated = name => ({
  type: types.DECK_CREATE,
  payload: {
    name,
  },
});

const deckSelected = name => ({
  type: types.DECK_SELECT,
  payload: {
    name,
  },
});

const cardCreated = (deckName, card) => ({
  type: types.CARD_CREATE,
  payload: {
    deckName,
    card,
  },
});

export { decksLoaded, deckCreated, deckSelected, cardCreated };
