import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import GenreQuestionScreen from './genre-questions-screen.jsx';

Enzyme.configure({adapter: new Adapter()});

const userAnswer = jest.fn();
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

describe(`<GenreQuestionScreen/>`, () => {
  it(`passes proper numbers of user's selected inputs to onAnswer callback`, () => {
    const component = mount(<GenreQuestionScreen
      game={game}
      onAnswer={userAnswer}
    />);

    const form = component.find(`.game__tracks`);
    form.simulate(`submit`,
        {preventDefault: () => {}, target: form.getDOMNode()});

    expect(userAnswer).toHaveBeenCalledWith([false, false, false, false]);

  });
});
