import React from 'react';
import renderer from 'react-test-renderer';

import AudioPlayer from './audio-player.jsx';

describe(`<AudioPlayer/>`, () => {
  it(`renders correctly`, () => {
    const component = renderer
      .create(<AudioPlayer
        src={``}
        isPlaying={false}
        onPlayButtonClick={() => {}}
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
