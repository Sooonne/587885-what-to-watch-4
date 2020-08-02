import {reducer, ActionType} from "./data.js";

const movies = [
  {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    genre: `Drama`,
    release: 2017,
    img: `/img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    bg: `/img/bg-the-grand-budapest-hotel.jpg`,
    poster: `/img/the-grand-budapest-hotel-poster.jpg`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    ratingScore: 10,
    ratingCount: 240,
    id: 1,
    src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    srcFull: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    bgColor: `#ffffff`,
    runTime: 10,
    isFavorite: false,
  },
  {
    title: `Bohemian Rhapsody`,
    genre: `Documentary`,
    release: 2017,
    img: `/img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    bg: `/img/bg-the-grand-budapest-hotel.jpg`,
    poster: `/img/the-grand-budapest-hotel-poster.jpg`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    ratingScore: 9,
    ratingCount: 240,
    id: 2,
    src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    srcFull: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    bgColor: `#ffffff`,
    runTime: 20,
    isFavorite: false,
  },
];

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    movies: [],
  });
});

it(`Reducer should update movies by load movies`, () => {
  expect(reducer({
    questions: [],
  }, {
    type: ActionType.LOAD_MOVIES,
    payload: movies,
  })).toEqual({
    movies,
  });
});


