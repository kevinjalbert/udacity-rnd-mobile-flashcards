import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

class DeckRowItem extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.viewDeck}>
        <Text style={styles.name}>{this.props.deck.name}</Text>
        <Text style={styles.cardsCount}>{this.props.deck.cards.length} cards</Text>
      </TouchableOpacity>
    );
  }
}

DeckRowItem.propTypes = {
  deck: PropTypes.shape({
    name: PropTypes.string,
    cards: PropTypes.arrayOf(
      PropTypes.shape({
        question: PropTypes.string,
        answer: PropTypes.string,
      }),
    ),
  }).isRequired,
  viewDeck: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    margin: 15,
  },
  cardsCount: {
    fontSize: 15,
    marginTop: -15,
    paddingBottom: 15,
    color: '#A9A9A9',
  },
});

export default DeckRowItem;
