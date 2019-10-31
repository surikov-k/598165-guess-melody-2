import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import AudioPlayer from '../audio-player/audio-player.jsx';

export default class GenreQuestionScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activePlayer: -1,
    };
  }
  render() {
    const {game, onAnswer} = this.props;
    const {
      id,
      question,
      choices,
    } = game;

    return (
      <section className="game game--genre" >
        <header className="game__header">
          <a className="game__back" href="#">
            <span className="visually-hidden">Сыграть ещё раз</span>
            <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
          </a>

          <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
            <circle className="timer__line" cx="390" cy="390" r="370"
              style={{
                filter: `url(#blur)`,
                transform: `rotate(-90deg) scaleY(-1)`,
                transformOrigin: `center`
              }} />
          </svg>

          <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
            <span className="timer__mins">05</span>
            <span className="timer__dots">:</span>
            <span className="timer__secs">00</span>
          </div>

          <div className="game__mistakes">
            <div className="wrong"></div>
            <div className="wrong"></div>
            <div className="wrong"></div>
          </div>
        </header>

        <section className="game__screen" >
          <h2 className="game__title">Выберите {question} треки</h2>
          <form
            key={id}
            className="game__tracks"
            onSubmit={(evt) => {
              evt.preventDefault();
              const userAnswer = new Array(choices.length).fill(false);
              const formData = new FormData(evt.target);

              formData.getAll(`answer`)
                .forEach((value) => {
                  userAnswer[parseInt(value.split(`-`)[1], 10)] = true;
                });
              onAnswer(userAnswer);
            }}>
            {
              choices.map((choice, i) => {
                return (
                  <div key={`${id}-answer-${i}`} className="track">
                    <AudioPlayer
                      src={choice.src}
                      isPlaying={i === this.state.activePlayer}
                      onPlayButtonClick={() => this.setState({
                        activePlayer: this.state.activePlayer === i ? -1 : i
                      })}
                    />

                    <div className="game__answer">
                      <input className="game__input visually-hidden" type="checkbox" name="answer" value={`answer-${i}`} id={`answer-${i}`} />
                      <label className="game__check" htmlFor={`answer-${i}`}>Отметить</label>
                    </div>
                  </div>
                );
              })
            }

            <button className="game__submit button" type="submit">Ответить</button>
          </form>
        </section>
      </section>
    );
  }

}

GenreQuestionScreen.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    question: PropTypes.oneOf([`rock`, `pop`, `jazz`, `folk`]),
    choices: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      genre: PropTypes.oneOf([`rock`, `pop`, `jazz`, `folk`]),
    })).isRequired,
  }).isRequired,
  onAnswer: PropTypes.func.isRequired,
};
