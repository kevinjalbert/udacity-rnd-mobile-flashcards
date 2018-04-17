import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, Text } from 'react-native';
import { Button, Card } from 'react-native-elements';

class DeckScreen extends Component {
  render() {
    if (this.props.deck === undefined || this.props.deck === null) {
      return null;
    }

    return (
      <Card containerStyle={styles.container}>
        <Text style={styles.name}>{this.props.deck.name}</Text>
        <Text style={styles.cardsCount}>{this.props.deck.cards.length} Cards</Text>

        <Button title="Add Card" raised onPress={() => this.props.navigation.navigate('AddCard')} />
        <Button title="Start Quiz" raised backgroundColor="black" onPress={this.addCard} />
      </Card>
    );
  }
}

DeckScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
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
    width: '100%',
    height: '100%',
    margin: 0,
  },
  name: {
    textAlign: 'center',
    fontSize: 20,
    paddingBottom: 15,
  },
  cardsCount: {
    textAlign: 'center',
    fontSize: 15,
    paddingBottom: 50,
    color: '#A9A9A9',
  },
});

const mapStateToProps = state => ({
  deck: state.deck.entries[state.deck.selectedDeck],
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DeckScreen);
