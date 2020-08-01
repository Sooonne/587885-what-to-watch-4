import {reducer, ActionType, initialState} from "./app.js";
import {MOVIES} from "../../data-for-tests/data-for-tests.js";
import {filterMoviesByGenre, ALL_GENRES} from "../../utils/const.js";


it(`Reducer without parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual(initialState);
});

it(`Reducer should return active genre`, () => {
  expect(reducer({
    activeGenre: `All genres`
  }, {
    type: ActionType.SET_ACTIVE_GENRE,
    payload: `Comedy`,
  })).toEqual({
    activeGenre: `Comedy`,
  });
});

// it(`Reducer should return right movies according to active genre`, () => {
//   expect(reducer({
//     activeGenre: `Documentary`,
//     filteredMovies: MOVIES,
//   }, {
//     type: ActionType.GET_MOVIES_BY_GENRE,
//     payload: filterMoviesByGenre(MOVIES, `Documentary`),
//   })).toEqual({
//     activeGenre: `Documentary`,
//     filteredMovies: [{
//       title: `Bohemian Rhapsody`,
//       genre: `Documentary`,
//       release: 2017,
//       img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
//       bg: `img/bg-the-grand-budapest-hotel.jpg`,
//       poster: `img/the-grand-budapest-hotel-poster.jpg`,
//       description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
//       director: `Wes Andreson`,
//       starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
//       ratingScore: 8.9,
//       ratingCount: 240,
//       id: 2,
//       src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
//       bgColor: `#ffffff`,
//       runTime: 20,
//       isFaborite: false,
//     }],
//   });
// });

it(`Reducer should return all movies with active All genres`, () => {
  expect(reducer({
    activeGenre: ALL_GENRES,
    filteredMovies: MOVIES,
  }, {
    type: ActionType.GET_MOVIES_BY_GENRE,
    payload: filterMoviesByGenre(MOVIES, ALL_GENRES),
  })).toEqual({
    activeGenre: ALL_GENRES,
    filteredMovies: MOVIES,
  });
});

it(`Reducer can reset showed movies`, () => {
  expect(reducer({
    showedMoviesAmount: 20,
  }, {
    type: ActionType.RESET_SHOWED_MOVIES,
    payload: 8
  })).toEqual({
    showedMoviesAmount: 8
  });
});

it(`Reducer can add showed movies`, () => {
  expect(reducer({
    showedMoviesAmount: 7,
    movies: MOVIES
  }, {
    type: ActionType.SHOW_MORE_MOVIES,
    payload: 1
  })).toEqual({
    showedMoviesAmount: 8,
    movies: MOVIES
  });
});

it(`Reducer can show all movies if movies + moremovies > movies`, () => {
  expect(reducer({
    showedMoviesAmount: 7,
    movies: MOVIES
  }, {
    type: ActionType.SHOW_MORE_MOVIES,
    payload: 1000
  })).toEqual({
    showedMoviesAmount: 24,
    movies: MOVIES
  });
});

