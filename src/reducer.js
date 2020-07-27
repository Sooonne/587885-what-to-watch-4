import {extend, ALL_GENRES, filterMoviesByGenre} from "./utils/const.js";
import {MOVIES} from "./mocks/movies.js";
import {MOVIE_CARD} from "./mocks/movie-card.js";
import {COMMENTS} from "./mocks/comments.js";
import {getAllGenres, SHOWED_MOVIES_AMOUNT} from "./utils/const.js";

export const initialState = {
  movies: MOVIES,
  movieCard: MOVIE_CARD,
  reviews: COMMENTS,
  activeGenre: ALL_GENRES,
  filteredMovies: MOVIES,
  genres: getAllGenres(MOVIES),
  showedMoviesAmount: SHOWED_MOVIES_AMOUNT,
};

const ActionType = {
  GET_MOVIES_BY_GENRE: `GET_MOVIES_BY_GENRE`,
  SET_ACTIVE_GENRE: `SET_ACTIVE_GENRE`,
  SHOW_MORE_MOVIES: `SHOW_MORE_MOVIES`,
  RESET_SHOWED_MOVIES: `RESET_SHOWED_MOVIES`,
};

const ActionCreator = {
  getMoviesByGenre: (activeGenre) => {
    const filteredMovies = filterMoviesByGenre(MOVIES, activeGenre);
    return {
      type: ActionType.GET_MOVIES_BY_GENRE,
      payload: filteredMovies
    };
  },

  setActiveGenre: (activeGenre) => {
    return {
      type: ActionType.SET_ACTIVE_GENRE,
      payload: activeGenre
    };
  },

  showMoreMovies: () => {
    return {
      type: ActionType.SHOW_MORE_MOVIES,
      payload: SHOWED_MOVIES_AMOUNT
    };
  },

  resetShowedMovies: () => {
    return {
      type: ActionType.RESET_SHOWED_MOVIES,
      payload: SHOWED_MOVIES_AMOUNT
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_ACTIVE_GENRE:
      return extend(state, {
        activeGenre: action.payload,
      });
    case ActionType.GET_MOVIES_BY_GENRE:
      return extend(state, {
        filteredMovies: action.payload,
      });
    case ActionType.SHOW_MORE_MOVIES:
      let nextAmount = state.showedMoviesAmount + action.payload;
      if (nextAmount > state.movies.length) {
        return extend(state, {
          showedMoviesAmount: state.movies.length
        });
      }
      return extend(state, {showedMoviesAmount: nextAmount});
    case ActionType.RESET_SHOWED_MOVIES:
      return extend(state, {showedMoviesAmount: action.payload});
  }
  return state;
};


export {reducer, ActionType, ActionCreator};
