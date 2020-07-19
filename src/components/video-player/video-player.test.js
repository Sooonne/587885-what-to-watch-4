import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player.jsx";

const video = {
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
  src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
};

describe(`VideoPlayer`, () => {
  it(`VideoPlayer should render correctly`, () => {
    const tree = renderer
      .create(<VideoPlayer
        isPlaying={false}
        src={video.src}
        poster={video.poster}
      />, {
        createNodeMock: () => {
          return {};
        }
      })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
