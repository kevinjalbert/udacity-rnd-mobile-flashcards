import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';

import { AddDeckScreenContainer } from './containers/AddDeckScreenContainer';
import { DecksScreenContainer } from './containers/DecksScreenContainer';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Tabs />
      </View>
    );
  }
}
