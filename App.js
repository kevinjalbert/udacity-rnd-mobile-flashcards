import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation'
import { FontAwesome } from '@expo/vector-icons'

import { AddDeckScreenContainer } from './containers/AddDeckScreenContainer'
import { DecksScreenContainer } from './containers/DecksScreenContainer'

const Tabs = TabNavigator({
  Decks: {
    screen: DecksScreenContainer,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='book' size={30} color={tintColor} />
    }
  },
  AddDeck: {
    screen: AddDeckScreenContainer,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
    }
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
