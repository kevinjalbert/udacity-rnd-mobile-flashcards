import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import { Button, Card, FormInput, FormLabel, FormValidationMessage } from 'react-native-elements';
import { isEmpty } from 'lodash';

import { deckOperations } from '../state/deck';

class AddDeckScreen extends Component {
  static navigationOptions = {
    title: 'Add Deck',
  };

  state = {
    name: '',
    error: false,
  };

  handleCreatePress = () => {
    if (isEmpty(this.state.name)) {
      this.setState({ error: true });
    } else {
      this.props.createDeck(this.state.name);
      this.setState({ name: '', error: false });
      this.props.navigation.navigate('Deck');
    }
  };

  render() {
    return (
      <Card title="Enter new deck's title" containerStyle={styles.container}>
        <FormLabel>Name</FormLabel>
        <FormInput onChangeText={name => this.setState({ name })} value={this.state.name} />
        <FormValidationMessage>{this.state.error && '* Required field'}</FormValidationMessage>
        <Button title="Create Deck" raised onPress={this.handleCreatePress} />
      </Card>
    );
  }
}

AddDeckScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  createDeck: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    margin: 0,
  },
});

const mapStateToProps = _state => ({});

const mapDispatchToProps = {
  createDeck: deckOperations.createDeck,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddDeckScreen);
