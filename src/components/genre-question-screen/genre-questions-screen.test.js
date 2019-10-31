import React from 'react';
import renderer from 'react-test-renderer';

import GenreQuestionsScreen from './genre-questions-screen.jsx';

const game = {
  id: 0,
  type: ``,
  question: `pop`,
  choices: [
    {
      src: ``,
      genre: `pop`,
    },
    {
      src: ``,
      genre: `pop`,
    },
    {
      src: ``,
      genre: `pop`,
    },
    {
      src: ``,
      genre: `pop`,
    },
  ],
};

describe(`<GenreQuestionScreen`, () => {
  it(`renderes correctly`, () => {
    const component = renderer
      .create(
          <GenreQuestionsScreen
            game={game}
            onAnswer={() => {}}
          />,
          {
            createNodeMock: () => {
              return {
                oncanplaythrough: null,
                onplay: null,
                onpause: null,
                ontimeupdate: null,
                src: ``
              };
            }
          }
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
