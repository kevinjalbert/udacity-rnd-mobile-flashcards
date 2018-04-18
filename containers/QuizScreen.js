import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, Text } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { clearLocalNotification } from '../utils/notifications';

import { deckSelectors } from '../state/deck';

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

  handleResetPress = () => {
    this.setState({ currentCard: 0, score: 0, cardFlipped: false });
  };

  handleBackToDeckPress = () => {
    this.props.navigation.goBack();
  };

  renderQuiz = () => {
    const { currentCard, score, cardFlipped } = this.state;
    const { cards } = this.props;

    return (
      <Card
        title={`Question ${currentCard + 1}/${cards.length} | Correct ${score}`}
        containerStyle={styles.container}
      >
        <Text style={styles.text}>
          {cardFlipped ? cards[currentCard].answer : cards[currentCard].question}
        </Text>

        <Button
          title={cardFlipped ? 'Show Question' : 'Show Answer'}
          backgroundColor="white"
          color="red"
          onPress={this.handleFlipCardPress}
        />

        <Button title="Correct" raised backgroundColor="green" onPress={this.handleCorrectPress} />

        <Button
          title="Incorrect"
          raised
          backgroundColor="red"
          onPress={this.handleIncorrectPress}
        />
      </Card>
    );
  };

  renderResults = () => {
    const { score } = this.state;
    const { cards } = this.props;

    return (
      <Card title="Quiz Results" containerStyle={styles.container}>
        <Text style={styles.text}>
          {`You got ${(score / cards.length * 100).toFixed(2)}% of that quiz correct!`}
        </Text>

        <Button title="Restart Quiz" raised onPress={this.handleResetPress} />

        <Button
          title="Back to Deck"
          raised
          backgroundColor="black"
          onPress={this.handleBackToDeckPress}
        />
      </Card>
    );
  };

  renderEmpty = () => (
    <Card containerStyle={styles.container}>
      <Text style={styles.text}>You have no cards... Go add some and come back</Text>

      <Button
        title="Back to Deck"
        raised
        backgroundColor="black"
        onPress={this.handleBackToDeckPress}
      />
    </Card>
  );

  render() {
    const { currentCard } = this.state;
    const { cards } = this.props;

    if (cards.length === 0) {
      return this.renderEmpty();
    } else if (currentCard < cards.length) {
      return this.renderQuiz();
    }

    clearLocalNotification();
    return this.renderResults();
  }
}

QuizScreen.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
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
  text: {
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 20,
  }
});

const mapStateToProps = state => ({
  cards: deckSelectors.selectedDeckCards(state),
});

export default connect(mapStateToProps)(QuizScreen);
