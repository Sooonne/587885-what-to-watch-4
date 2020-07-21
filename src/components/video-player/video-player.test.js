import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player.jsx";
import {VIDEO} from "../../data-for-tests/data-for-tests.js";

describe(`VideoPlayer`, () => {
  it(`VideoPlayer should render correctly`, () => {
    const tree = renderer
      .create(<VideoPlayer
        isPlaying={false}
        src={VIDEO.src}
        poster={VIDEO.poster}
      />, {
        createNodeMock: () => {
          return {};
        }
      })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
