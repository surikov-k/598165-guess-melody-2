import React from 'react';
import renderer from 'react-test-renderer';

import {App} from './app.jsx';

describe(`App component`, () => {
  it(`correctly renders`, () => {
    const component = renderer
      .create(<App
        time={0}
        errorCount={0}
        onClick={() => {}}
      />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
