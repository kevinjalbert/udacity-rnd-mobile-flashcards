import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, FlatList, Text, View, TouchableOpacity } from 'react-native';

import { deckOperations } from '../state/deck';
import DeckRowItem from '../components/DeckRowItem';

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
      <FlatList
        style={styles.list}
        data={this.props.decks}
        keyExtractor={item => item.name}
        renderItem={data => <DeckRowItem deck={data.item} />}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 2,
              backgroundColor: '#CED0CE',
            }}
          />
        )}
      />
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
    marginTop: 20,
  },
  list: {
    height: '100%',
    width: '100%',
  },
});

const mapStateToProps = state => ({
  decks: state.deck.loaded,
});

const mapDispatchToProps = {
  loadDecks: deckOperations.loadDecks,
};

export default connect(mapStateToProps, mapDispatchToProps)(DecksScreenContainer);
