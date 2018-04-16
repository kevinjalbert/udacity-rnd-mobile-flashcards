import * as actions from './actions';
import { getDecks, saveDeckTitle } from '../../utils/storage';

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

export { loadDecks, createNewDeck, selectDeck };
