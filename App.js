import React from 'react';
import { View, Dimensions } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';
import { Provider } from 'react-redux';

import store from './state/store';
import QuizScreen from './containers/QuizScreen';
import AddCardScreen from './containers/AddCardScreen';
import AddDeckScreen from './containers/AddDeckScreen';
import DecksScreen from './containers/DecksScreen';
import DeckScreen from './containers/DeckScreen';
import { setLocalNotification } from './utils/notifications';

/* eslint-disable no-console */
console.disableYellowBox = true; // Disable the react 16.3.0 depreciation warnings in app
/* eslint-enable no-console */

/* eslint-disable react/prop-types */
const Tabs = TabNavigator({
  Decks: {
    screen: DecksScreen,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <FontAwesome name="book" size={30} color={tintColor} />,
    },
  },
  AddDeck: {
    screen: AddDeckScreen,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => <FontAwesome name="plus-square" size={30} color={tintColor} />,
    },
  },
});
/* eslint-enable react/prop-types */

const Navigation = StackNavigator({
  Root: {
    screen: Tabs,
  },
  Deck: {
    screen: DeckScreen,
    navigationOptions: {
      headerTitle: 'Deck View',
    },
  },
  AddCard: {
    screen: AddCardScreen,
    navigationOptions: {
      headerTitle: 'Add Card',
    },
  },
  Quiz: {
    screen: QuizScreen,
    navigationOptions: {
      headerTitle: 'Quiz',
    },
  },
});

const { width, height } = Dimensions.get('window');

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1, width, height }}>
          <Navigation />
        </View>
      </Provider>
    );
  }
}
