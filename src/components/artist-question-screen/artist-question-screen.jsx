import React from 'react';
import PropTypes from "prop-types";

const ArtistQuestionScreen = ({game, onAnswer}) => {
  const {
    id,
    question,
    choices
  } = game;

  return (
    <section className="game game--artist">
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
        </a>

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line"
            cx="390"
            cy="390"
            r="370"
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

      <section className="game__screen">
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <div className="track">
            <button className="track__button track__button--play" type="button"></button>
            <div className="track__status">
              <audio src={question.src}></audio>
            </div>
          </div>
        </div>

        <form
          className="game__artist"
          onChange={(evt) => {
            onAnswer(parseInt(evt.target.value.split(`-`)[1], 10));
          }}
        >
          {
            choices.map((choice, i) => {
              return (
                <div key={`${id}-answer-${i}`} className="artist">
                  <input
                    className="artist__input visually-hidden"
                    type="radio"
                    name="answer"
                    value={`answer-${i}`}
                    id={`answer-${i}`}
                  />
                  <label
                    className="artist__name"
                    htmlFor={`answer-${i}`}>
                    <img className="artist__picture"
                      src={choice.src}
                      alt={choice.artist} />
                    {choice.artist}
                  </label>
                </div>
              );
            })
          }

        </form>
      </section>
    </section>
  );
};

ArtistQuestionScreen.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    question: PropTypes.shape({
      artist: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    }).isRequired,
    choices: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
  onAnswer: PropTypes.func.isRequired,
};

export default ArtistQuestionScreen;
