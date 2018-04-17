import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

import { deckOperations } from '../state/deck';

class AddDeckScreen extends Component {
  state = {
    name: '',
  };

  pressCreate = () => {
    this.props.createNewDeck(this.state.name);
    this.setState({ name: '' });
    this.props.navigation.navigate('Deck');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Add Deck</Text>
        <TextInput
          style={styles.textInput}
          editable
          maxLength={40}
          placeholder="Name"
          value={this.state.name}
          onChangeText={name => this.setState({ name })}
        />
        <TouchableOpacity style={styles.button} onPress={this.pressCreate}>
          <Text style={styles.buttonText}>Create</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

AddDeckScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  createNewDeck: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  textInput: {
    margin: 30,
    alignSelf: 'stretch',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
  },
  text: {
    textAlign: 'center',
    fontSize: 40,
  },
  button: {
    backgroundColor: 'black',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
});

const mapStateToProps = _state => ({});

const mapDispatchToProps = {
  createNewDeck: deckOperations.createNewDeck,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddDeckScreen);
