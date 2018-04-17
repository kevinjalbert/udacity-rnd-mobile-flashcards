import { isEmpty } from 'lodash';

function selectedDeck(state) {
  if (isEmpty(state.deck.entries) || isEmpty(state.deck.selectedDeck)) {
    return null;
  }
  return state.deck.entries[state.deck.selectedDeck];
}

function selectedDeckCards(state) {
  const deck = selectedDeck(state);
  return deck ? deck.cards : null;
}

function selectedDeckName(state) {
  const deck = selectedDeck(state);
  return deck ? deck.name : null;
}

function selectedDeckCardsCount(state) {
  const deck = selectedDeck(state);
  return deck ? deck.cards.length : null;
}

export { selectedDeck, selectedDeckCards, selectedDeckName, selectedDeckCardsCount };
