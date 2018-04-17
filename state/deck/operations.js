import * as actions from './actions';
import { getDecks, saveDeckTitle, addCardToDeck } from '../../utils/storage';

const loadDecks = () => dispatch => {
  getDecks().then(decks => {
    dispatch(actions.loaded(decks));
  });
};

const createNewDeck = name => dispatch => {
  saveDeckTitle(name).then(() => {
    dispatch(actions.newDeck(name));
  });
};

const selectDeck = name => dispatch => {
  dispatch(actions.selected(name));
};

const createNewCard = (deckName, card) => dispatch => {
  addCardToDeck(deckName, card).then(() => {
    dispatch(actions.newCard(deckName, card));
  });
};

export { loadDecks, createNewDeck, selectDeck, createNewCard };
