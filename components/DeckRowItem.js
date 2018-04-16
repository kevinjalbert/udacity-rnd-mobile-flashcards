import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class DeckRowItem extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.viewDeck}>
        <Text style={styles.text}>{this.props.deck.name}</Text>
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
  text: {
    fontSize: 20,
    padding: 20,
  },
});

export default DeckRowItem;
