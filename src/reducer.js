import {extend, ALL_GENRES, filterMoviesByGenre} from "./utils/const.js";
import {MOVIES} from "./mocks/movies.js";
import {PROMO_FILM} from "./mocks/promo-film.js";
import {COMMENTS} from "./mocks/comments.js";

const initialState = {
  movies: MOVIES,
  promoInfo: PROMO_FILM,
  reviews: COMMENTS,
  activeGenre: ALL_GENRES,
  filteredMovies: MOVIES,
};

const ActionType = {
  GET_MOVIES_BY_GENRE: `GET_MOVIES_BY_GENRE`,
  SET_ACTIVE_GENRE: `SET_ACTIVE_GENRE`,
};

const ActionCreator = {
  getMoviesByGenre: (allMovies, activeGenre) => {
    const filteredMovies = filterMoviesByGenre(allMovies, activeGenre);
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
