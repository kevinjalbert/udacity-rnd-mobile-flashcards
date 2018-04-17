import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import { Button, Card, FormInput, FormLabel, FormValidationMessage } from 'react-native-elements';
import { isEmpty } from 'lodash';

import { deckOperations } from '../state/deck';

class AddCardScreen extends Component {
  state = {
    question: '',
    answer: '',
    error: false,
  };

  handleCreatePress = () => {
    if (isEmpty(this.state.question) || isEmpty(this.state.answer)) {
      this.setState({ error: true });
    } else {
      this.props.createCard(this.props.deckName, {
        question: this.state.question,
        answer: this.state.answer,
      });
      this.setState({ question: '', answer: '', error: false });
      this.props.navigation.goBack();
    }
  };

  render() {
    return (
      <Card title="Enter card's question and answer" containerStyle={styles.container}>
        <FormLabel>Question</FormLabel>
        <FormInput
          onChangeText={question => this.setState({ question })}
          value={this.state.question}
        />
        <FormValidationMessage>{this.state.error && '* Required field'}</FormValidationMessage>

        <FormLabel>Answer</FormLabel>
        <FormInput onChangeText={answer => this.setState({ answer })} value={this.state.answer} />
        <FormValidationMessage>{this.state.error && '* Required field'}</FormValidationMessage>

        <Button title="Create Card" raised onPress={this.handleCreatePress} />
      </Card>
    );
  }
}

AddCardScreen.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
  createCard: PropTypes.func.isRequired,
  deckName: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    margin: 0,
  },
});

const mapStateToProps = state => ({
  deckName: state.deck.entries[state.deck.selectedDeck].name,
});

const mapDispatchToProps = {
  createCard: deckOperations.createCard,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCardScreen);
