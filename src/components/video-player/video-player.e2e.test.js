import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import VideoPlayer from "./video-player.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const video = {
  src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
};

window.HTMLMediaElement.prototype.load = () => { /* do nothing */ };
window.HTMLMediaElement.prototype.play = () => { /* do nothing */ };

describe(`VideoPlayer e2e test`, () => {
  it(`Should start and pause work correctly`, () => {
    const videoPlayer = mount(
        <VideoPlayer
          isPlaying = {false}
          src = {video.src}
          poster = {video.poster}
        />, {
          createNodeMock: () => {
            return {};
          }
        });

    expect(videoPlayer.props().isPlaying).toEqual(false);
    videoPlayer.setProps({isPlaying: true});
    expect(videoPlayer.props().isPlaying).toEqual(true);
  });
});
