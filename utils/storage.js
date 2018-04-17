import { AsyncStorage } from 'react-native';

export function getDecks() {
  return AsyncStorage.getAllKeys().then(keys =>
    AsyncStorage.multiGet(keys).then(results => {
      const decks = {};

      results.forEach(values => {
        decks[values[0]] = JSON.parse(values[1]);
      });

      return decks;
    }),
  );
}

export function saveDeckTitle(name) {
  return AsyncStorage.setItem(name, JSON.stringify({ name, cards: [] }));
}

export function addCardToDeck(deckName, card) {
  return AsyncStorage.getItem(deckName).then(result => {
    const { cards } = JSON.parse(result);
    cards.push(card);

    AsyncStorage.mergeItem(
      deckName,
      JSON.stringify({
        cards,
      }),
    );
    return card;
  });
}
