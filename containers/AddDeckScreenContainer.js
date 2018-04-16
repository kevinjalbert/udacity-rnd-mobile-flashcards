import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

class AddDeckScreenContainer extends Component {
  render() {
    return (
      <View>
        <Text>Add Deck Screen</Text>
      </View>
    );
  }
}

function mapStateToProps(_state) {
  return {};
}

export default connect(mapStateToProps)(AddDeckScreenContainer);
