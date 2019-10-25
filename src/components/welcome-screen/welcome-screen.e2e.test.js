import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {WelcomeScreen} from './welcome-screen.jsx';

Enzyme.configure({adapter: new Adapter()});

describe(`Welcome Screen component`, () => {
  it(`fiers onClick callback after click on welcome__button`, () => {
    const onClick = jest.fn();
    const component = shallow(<WelcomeScreen
      time={0}
      errorCount={0}
      onStartButtonClick={onClick}
    />);

    const welcomeButton = component.find(`.welcome__button`);
    welcomeButton.simulate(`click`);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
