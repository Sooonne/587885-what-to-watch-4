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
    showedMoviesAmount: 1007,
    movies: MOVIES
  });
});

