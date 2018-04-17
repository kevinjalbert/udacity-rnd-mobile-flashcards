import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, Text } from 'react-native';
import { Button, Card } from 'react-native-elements';

class QuizScreen extends Component {
  state = {
    currentCard: 0,
    score: 0,
    cardFlipped: false,
  };

  handleFlipCardPress = () => {
    this.setState(state => ({ cardFlipped: !state.cardFlipped }));
  };

  handleCorrectPress = () => {
    this.setState(state => ({ score: state.score + 1, currentCard: state.currentCard + 1 }));
  };

  handleIncorrectPress = () => {
    this.setState(state => ({ currentCard: state.currentCard + 1 }));
  };

  render() {
    const { currentCard, score, cardFlipped } = this.state;
    const { cards } = this.props;

    return (
      <Card
        title={`Question ${currentCard + 1}/8 | Correct ${score}`}
        containerStyle={styles.container}
      >
        <Text style={styles.text}>
          {cardFlipped ? cards[currentCard].answer : cards[currentCard].question}
        </Text>

        <Button
          title={cardFlipped ? 'Show Answer' : 'Show Question'}
          backgroundColor="white"
          color="red"
          onPress={() => this.handleFlipCardPress()}
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
