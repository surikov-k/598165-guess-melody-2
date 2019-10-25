import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {WelcomeScreen} from '../welcome-screen/welcome-screen.jsx';
import GenreQuestionScreen from '../genre-question-screen/genre-questions-screen.jsx';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen.jsx';

export default class App extends PureComponent {
  static getScreen(step, props, onUserAnswer) {
    if (step === -1) {
      const {
        time,
        errorCount,
      } = props;

      return <WelcomeScreen
        time={time}
        errorCount={errorCount}
        onStartButtonClick={onUserAnswer}
      />;
    }
    const {games} = props;
    const currentGame = games[step];

    switch (currentGame.type) {
      case `genre`:
        return <GenreQuestionScreen
          game={currentGame}
          onAnswer={onUserAnswer}
        />;
      case `artist`:
        return <ArtistQuestionScreen
          game={currentGame}
          onAnswer={onUserAnswer}
        />;
    }
    return null;
  }

  constructor(props) {
    super(props);
    this.state = {
      step: -1,
    };
    this._userAnswerHandler = this._userAnswerHandler.bind(this);
  }

  render() {
    const {step} = this.state;

    return App.getScreen(step, this.props, this._userAnswerHandler);
  }

  _userAnswerHandler(userAnswer) {
    const {games} = this.props;

    this.setState((state) => {
      const nextStep = state.step + 1;
      const isEnd = nextStep >= games.length;

      return {step: !isEnd ? nextStep : -1, userAnswer};
    });
  }
}

App.propTypes = {
  time: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
  games: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

