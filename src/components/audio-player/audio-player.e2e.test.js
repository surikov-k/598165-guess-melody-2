import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AudioPlayer from './audio-player.jsx';

Enzyme.configure({adapter: new Adapter()});

const playButtonClickHandeler = jest.fn();

describe(`<AudioPlayer />`, () => {
  it(`starts playing when play button clicked`, () => {
    const component = mount(<AudioPlayer
      src=""
      isPlaying={false}
      onPlayButtonClick={playButtonClickHandeler}
    />);

    const playButton = component.find(`.track__button`);

    component.setState({isLoading: false});

    playButton.simulate(`click`);
    expect(component.state().isPlaying).toEqual(true);
  });

  it(`stops playing when pause button clicked`, () => {
    const component = mount(<AudioPlayer
      src=""
      isPlaying={true}
      onPlayButtonClick={playButtonClickHandeler}
    />);

    const playButton = component.find(`.track__button`);

    component.setState({isLoading: false});

    playButton.simulate(`click`);
    expect(component.state().isPlaying).toEqual(false);
  });
});

