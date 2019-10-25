import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

import {settings, games} from './mocks/questions';

const init = () => {

  ReactDOM.render(
      <App
        time={settings.time}
        errorCount={settings.errorCount}
        games={games}
      />,
      document.querySelector(`#root`));
};

init();
