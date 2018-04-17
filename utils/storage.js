import { AsyncStorage } from 'react-native';
import { NOTIFICATION_KEY } from './notifications';

export function getDecks() {
  return AsyncStorage.getAllKeys().then(keys =>
    AsyncStorage.multiGet(keys).then(results => {
      const decks = {};

      results.forEach(values => {
        // Filter out the notification and null keys
        if (values[0] === NOTIFICATION_KEY || values[0] === null) {
          return;
        }
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
