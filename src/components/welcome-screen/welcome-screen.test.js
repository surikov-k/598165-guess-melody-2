import React from 'react';
import renderer from 'react-test-renderer';

import {WelcomeScreen} from './welcome-screen.jsx';

describe(`Welcome Screen component`, () => {
  it(`correctly renders`, () => {
    const component = renderer
      .create(<WelcomeScreen
        time={0}
        errorCount={0}
        onStartButtonClick={() => {}}
      />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});

