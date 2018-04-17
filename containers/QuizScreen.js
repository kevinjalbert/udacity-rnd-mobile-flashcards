import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, Text } from 'react-native';
import { Button, Card } from 'react-native-elements';

class QuizScreen extends Component {
  render() {
    return (
      <Card title="Question 1/8" containerStyle={styles.container}>
        <Text style={styles.question}>{this.props.cards[0].question}</Text>
        <Text style={styles.answer}>{this.props.cards[0].answer}</Text>

        <Button
          title="Show Answer"
          backgroundColor="white"
          color="red"
          onPress={() => this.handleShowAnswerPress()}
        />

        <Button
          title="Correct"
          raised
          backgroundColor="green"
          onPress={() => this.handleCorrectPress()}
        />

        <Button
          title="Incorrect"
          raised
          backgroundColor="red"
          onPress={() => this.handleIncorrectPress()}
        />
      </Card>
    );
  }
}

QuizScreen.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string,
      answer: PropTypes.string,
    }),
  ).isRequired,
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    margin: 0,
  },
});

const mapStateToProps = state => ({
  cards: state.deck.entries[state.deck.selectedDeck].cards,
});

export default connect(mapStateToProps)(QuizScreen);
