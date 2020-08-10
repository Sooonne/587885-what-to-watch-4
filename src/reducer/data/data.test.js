import {reducer, ActionType, Operation} from "./data.js";
import {createAPI} from '../../api';
import {createMovie} from "../../adapter/adapter-movie";
import MockAdapter from 'axios-mock-adapter';

const api = createAPI(() => {});

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

const reviewes = [
  {
    id: 1,
    user: {
      id: 2,
      name: `Kate Muir`,
    },
    rating: 8.9,
    comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    date: `2019-05-08T14:13:56.569Z`
  },
  {
    id: 2,
    user: {
      id: 4,
      name: `Kate Muir`
    },
    rating: 8.9,
    comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    date: `2019-05-08T14:13:56.569Z`
  },
];

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    movies: [],
    favoriteMovies: [],
    movieCard: {},
    reviewes: [],
    submitStatus: `Default`,

  });
});

it(`Reducer should update movies by load movies`, () => {
  expect(reducer({
    movies: [],
  }, {
    type: ActionType.LOAD_MOVIES,
    payload: movies,
  })).toEqual({
    movies,
  });
});

it(`Reducer should update reviews by load`, () => {
  expect(reducer({
    reviewes: [],
  }, {
    type: ActionType.LOAD_REVIEWES,
    payload: reviewes,
  })).toEqual({
    reviewes,
  });
});

it(`Should make a correct API call to /films`, () => {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const moviesLoader = Operation.loadMovies();

  apiMock
    .onGet(`/films`)
    .reply(200, [{fake: true}]);

  return moviesLoader(dispatch, () => {}, api)
        .then(() => {
          expect(dispatch).toHaveBeenCalledTimes(1);
          expect(dispatch).toHaveBeenCalledWith({
            type: ActionType.LOAD_MOVIES,
            payload: [createMovie({fake: true})],
          });
        });
});

it(`Should make a correct API call to /films/promo`, () => {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const movieCardLoader = Operation.loadMovieCard();

  apiMock
    .onGet(`/films/promo`)
    .reply(200, [{fake: true}]);

  return movieCardLoader(dispatch, () => {}, api)
        .then(() => {
          expect(dispatch).toHaveBeenCalledTimes(1);
          expect(dispatch).toHaveBeenCalledWith({
            type: ActionType.LOAD_MOVIE_CARD,
            payload: createMovie({fake: true}),
          });
        });
});

it(`Should make a correct API call to /comments/1`, () => {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const reviewsLoader = Operation.loadMovieReviewes(1);

  apiMock
    .onGet(`/comments/1`)
    .reply(200, [{fake: true}]);

  return reviewsLoader(dispatch, () => {}, api)
        .then(() => {
          expect(dispatch).toHaveBeenCalledTimes(1);
          expect(dispatch).toHaveBeenCalledWith({
            type: ActionType.LOAD_REVIEWES,
            payload: [{fake: true}],
          });
        });
});

it(`Should make a correct API call to /favorite`, () => {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const favoriteMoviesLoader = Operation.loadFavoriteMovies();

  apiMock
    .onGet(`/favorite`)
    .reply(200, [{fake: true}]);

  return favoriteMoviesLoader(dispatch, () => {}, api)
        .then(() => {
          expect(dispatch).toHaveBeenCalledTimes(1);
          expect(dispatch).toHaveBeenCalledWith({
            type: ActionType.LOAD_FAVORITE_MOVIES,
            payload: [createMovie({fake: true})],
          });
        });
});

