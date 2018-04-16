import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { deckOperations } from '../state/deck';

class DecksScreenContainer extends Component {
  componentDidMount() {
    this.props.loadDecks();
  }

  renderEmptyDecks = () => (
    <View style={styles.container}>
      <Text style={styles.text}>No Decks</Text>

      <TouchableOpacity onPress={() => this.props.navigation.navigate('AddDeck')}>
        <FontAwesome name="plus-square" size={50} />,
      </TouchableOpacity>
    </View>
  );

  renderDecks = () => (
    <View style={styles.container}>
      <Text style={styles.text}>Decks</Text>
      {this.props.decks.map(deck => <Text key={deck.name}>{deck.name}</Text>)}
    </View>
  );

  render() {
    if (this.props.decks.length === 0) {
      return this.renderEmptyDecks();
    }
    return this.renderDecks();
  }
}

DecksScreenContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  loadDecks: PropTypes.func.isRequired,
  decks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      cards: PropTypes.arrayOf(
        PropTypes.shape({
          question: PropTypes.string,
          answer: PropTypes.string,
        }),
      ),
    }),
  ).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    marginTop: 200,
    marginBottom: 25,
  },
});

const mapStateToProps = state => ({
  decks: state.deck.loaded,
});

const mapDispatchToProps = {
  loadDecks: deckOperations.loadDecks,
};

export default connect(mapStateToProps, mapDispatchToProps)(DecksScreenContainer);
