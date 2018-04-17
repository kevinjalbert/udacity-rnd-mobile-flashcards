import * as actions from './actions';
import { getDecks, saveDeckTitle, addCardToDeck } from '../../utils/storage';

const loadDecks = () => dispatch => {
  getDecks().then(decks => {
    dispatch(actions.decksLoaded(decks));
  });
};

const createDeck = name => dispatch => {
  saveDeckTitle(name).then(() => {
    dispatch(actions.deckCreated(name));
  });
};

const selectDeck = name => dispatch => {
  dispatch(actions.deckSelected(name));
};

const createCard = (deckName, card) => dispatch => {
  addCardToDeck(deckName, card).then(() => {
    dispatch(actions.cardCreated(deckName, card));
  });
};

export { loadDecks, createDeck, selectDeck, createCard };
