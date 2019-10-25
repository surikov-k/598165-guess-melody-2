import React from 'react';
import renderer from 'react-test-renderer';

import ArtistQuestionScreen from './artist-question-screen.jsx';

const game = {
  id: 0,
  type: ``,
  question: {
    artist: ``,
    src: ``,
  },
  choices: [
    {
      src: ``,
      artist: ``,
    },
    {
      src: ``,
      artist: ``,
    },
    {
      src: ``,
      artist: ``,
    },
  ],
};

describe(`<ArtistQuestinScreen/>`, () => {
  it(`renders correctly`, () => {
    const component = renderer
      .create(<ArtistQuestionScreen
        game={game}
        onAnswer={() => {}}
      />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
