import React from 'react';
import { View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

import reducers from './reducers';
import AddDeckScreenContainer from './containers/AddDeckScreenContainer';
import DecksScreenContainer from './containers/DecksScreenContainer';

/* eslint-disable no-console */
console.disableYellowBox = true; // Disable the react 16.3.0 depreciation warnings in app
/* eslint-enable no-console */

/* eslint-disable react/prop-types */
const Tabs = TabNavigator({
  Decks: {
    screen: DecksScreenContainer,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <FontAwesome name="book" size={30} color={tintColor} />,
    },
  },
  AddDeck: {
    screen: AddDeckScreenContainer,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => <FontAwesome name="plus-square" size={30} color={tintColor} />,
    },
  },
});
/* eslint-enable react/prop-types */

const middewares = [thunkMiddleware, logger];
const store = createStore(reducers, compose(applyMiddleware(...middewares)));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Tabs />
        </View>
      </Provider>
    );
  }
}
