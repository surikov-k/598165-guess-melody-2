import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ArtistQuestionScreen from './artist-question-screen.jsx';

Enzyme.configure({adapter: new Adapter()});

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
const onAnswer = jest.fn();

describe(`<ArtistQuestionScree/>`, () => {
  it(`passes selected input number to onAnswer callback`, () => {
    const component = mount(<ArtistQuestionScreen
      game={game}
      onAnswer={onAnswer}
    />);

    const form = component.find(`.game__artist`);
    form.simulate(`change`, {target: {value: `answer-2`}});
    expect(onAnswer).toHaveBeenCalledWith(2);

  });
});

