import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

class DeckScreenContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.deckInfo}>
          <Text style={styles.name}>{this.props.deck.name}</Text>
          <Text style={styles.cardsCount}>{this.props.deck.cards.length} Cards</Text>
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity style={styles.addCardButton} onPress={this.addCard}>
            <Text style={styles.addCardText}>Add Card</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.startQuizButton} onPress={this.addCard}>
            <Text style={styles.startQuizText}>Start Quiz</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

DeckScreenContainer.propTypes = {
  deck: PropTypes.shape({
    name: PropTypes.string,
    cards: PropTypes.arrayOf(
      PropTypes.shape({
        question: PropTypes.string,
        answer: PropTypes.string,
      }),
    ),
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  deckInfo: {
    margin: 100,
  },
  name: {
    textAlign: 'center',
    fontSize: 20,
    margin: 15,
  },
  cardsCount: {
    textAlign: 'center',
    fontSize: 15,
    paddingBottom: 15,
    color: '#A9A9A9',
  },
  addCardButton: {
    backgroundColor: 'white',
    padding: 20,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  addCardText: {
    color: 'black',
  },
  startQuizButton: {
    backgroundColor: 'black',
    padding: 20,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  startQuizText: {
    color: 'white',
  },
});

const mapStateToProps = state => ({
  deck: state.deck.entries[state.deck.selected],
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DeckScreenContainer);
