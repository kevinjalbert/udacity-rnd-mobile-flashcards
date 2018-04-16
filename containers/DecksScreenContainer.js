import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

class DecksScreenContainer extends Component {
  render() {
    return (
      <View>
        <Text>Decks Screen</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    decks: state.decks,
  };
}

export default connect(mapStateToProps)(DecksScreenContainer);
