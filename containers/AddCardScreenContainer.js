import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

import { deckOperations } from '../state/deck';

class AddCardScreenContainer extends Component {
  state = {
    question: '',
    answer: '',
  };

  pressCreate = () => {
    this.props.createNewCard(this.props.deck.name, {
      question: this.state.question,
      answer: this.state.answer,
    });
    this.setState({ question: '', answer: '' });
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          editable
          placeholder="Question"
          value={this.state.question}
          onChangeText={question => this.setState({ question })}
        />
        <TextInput
          style={styles.textInput}
          editable
          placeholder="Answer"
          value={this.state.answer}
          onChangeText={answer => this.setState({ answer })}
        />
        <TouchableOpacity style={styles.button} onPress={this.pressCreate}>
          <Text style={styles.buttonText}>Create</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

AddCardScreenContainer.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
  createNewCard: PropTypes.func.isRequired,
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

const mapStateToProps = state => ({
  deck: state.deck.entries[state.deck.selected],
});

const mapDispatchToProps = {
  createNewCard: deckOperations.createNewCard,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCardScreenContainer);
