import {extend, ALL_GENRES, filterMoviesByGenre} from "./utils/const.js";
import {MOVIES} from "./mocks/movies.js";
import {MOVIE_CARD} from "./mocks/movie-card.js";
import {COMMENTS} from "./mocks/comments.js";

const initialState = {
  movies: MOVIES,
  movieCard: MOVIE_CARD,
  reviews: COMMENTS,
  activeGenre: ALL_GENRES,
  filteredMovies: MOVIES,
};

const ActionType = {
  GET_MOVIES_BY_GENRE: `GET_MOVIES_BY_GENRE`,
  SET_ACTIVE_GENRE: `SET_ACTIVE_GENRE`,
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
  }
  return state;
};


export {reducer, ActionType, ActionCreator};
