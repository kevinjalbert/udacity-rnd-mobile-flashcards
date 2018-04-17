import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';

class DeckRowItem extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.handleViewDeckPress}>
        <Card containerStyle={styles.card}>
          <Text style={styles.name}>{this.props.deck.name}</Text>
          <Text style={styles.cardsCount}>{this.props.deck.cards.length} cards</Text>
        </Card>
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
  handleViewDeckPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  card: {
    width: '100%',
    marginTop: 0,
    marginBottom: 0,
  },
  name: {
    fontSize: 20,
    textAlign: 'center',
  },
  cardsCount: {
    fontSize: 15,
    color: '#A9A9A9',
    textAlign: 'center',
  },
});

export default DeckRowItem;
