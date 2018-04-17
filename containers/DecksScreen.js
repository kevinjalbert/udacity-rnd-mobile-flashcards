import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { List, ListItem } from 'react-native-elements';

import { deckOperations } from '../state/deck';

class DecksScreen extends Component {
  static navigationOptions = {
    title: 'Decks',
  };

  componentDidMount() {
    this.props.loadDecks();
  }

  handleViewDeckPress = name => {
    this.props.selectDeck(name);
    this.props.navigation.navigate('Deck');
  };

  render() {
    return (
      <List containerStyle={{ marginTop: 0 }}>
        <ListItem
          key="new_deck"
          title="New Deck"
          rightIcon={{ name: 'plus-square', type: 'font-awesome' }}
          onPress={() => this.props.navigation.navigate('AddDeck')}
        />
        {Object.values(this.props.decks).map(deck => (
          <ListItem
            key={deck.name}
            title={deck.name}
            subtitle={`${deck.cards.length} Cards`}
            onPress={() => this.handleViewDeckPress(deck.name)}
          />
        ))}
      </List>
    );
  }
}

DecksScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  loadDecks: PropTypes.func.isRequired,
  selectDeck: PropTypes.func.isRequired,
  decks: PropTypes.shape({
    name: PropTypes.string,
    cards: PropTypes.arrayOf(
      PropTypes.shape({
        question: PropTypes.string,
        answer: PropTypes.string,
      }),
    ),
  }).isRequired,
};

const mapStateToProps = state => ({
  decks: state.deck.entries,
});

const mapDispatchToProps = {
  loadDecks: deckOperations.loadDecks,
  selectDeck: deckOperations.selectDeck,
};

export default connect(mapStateToProps, mapDispatchToProps)(DecksScreen);
