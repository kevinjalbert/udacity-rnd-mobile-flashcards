import * as actions from './actions';

const loadDecks = actions.loaded;

const createNewDeck = name => dispatch => {
  dispatch(actions.newDeck(name));
};

const selectDeck = name => dispatch => {
  dispatch(actions.selected(name));
};

export { loadDecks, createNewDeck, selectDeck };
