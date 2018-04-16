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
