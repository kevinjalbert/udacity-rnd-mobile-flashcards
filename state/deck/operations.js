import * as actions from './actions';

const loadDecks = actions.loaded;

const createNewDeck = name => dispatch => {
  dispatch(actions.newDeck(name));
};

export { loadDecks, createNewDeck };
