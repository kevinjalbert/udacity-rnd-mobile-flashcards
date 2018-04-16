import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class DecksScreenContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No Decks</Text>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('AddDeck')}>
          <FontAwesome name="plus-square" size={50} />,
        </TouchableOpacity>
      </View>
    );
  }
}

DecksScreenContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
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

function mapStateToProps(state) {
  return {
    decks: state.decks,
  };
}

export default connect(mapStateToProps)(DecksScreenContainer);
