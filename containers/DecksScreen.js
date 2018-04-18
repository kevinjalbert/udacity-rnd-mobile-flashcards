import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { List, ListItem } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

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

  renderListItem = deck => {
    if (deck && deck.name && deck.cards) {
      return (
        <ListItem
          key={deck.name}
          title={deck.name}
          subtitle={`${deck.cards.length} Cards`}
          onPress={() => this.handleViewDeckPress(deck.name)}
        />
      );
    }
    return null;
  };

  render() {
    return (
      <ScrollView>
        <List containerStyle={styles.container}>
          <ListItem
            key="new_deck"
            title="New Deck"
            rightIcon={{ name: 'plus-square', type: 'font-awesome' }}
            onPress={() => this.props.navigation.navigate('AddDeck')}
          />
          {Object.values(this.props.decks).map(deck => this.renderListItem(deck))}
        </List>
      </ScrollView>
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

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    marginTop: 0,
  },
});

const mapStateToProps = state => ({
  decks: state.deck.entries,
});

const mapDispatchToProps = {
  loadDecks: deckOperations.loadDecks,
  selectDeck: deckOperations.selectDeck,
};

export default connect(mapStateToProps, mapDispatchToProps)(DecksScreen);
