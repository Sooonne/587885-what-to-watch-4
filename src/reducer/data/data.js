import {extend} from "../../utils/const.js";
import {createMovie} from "../../adapter/adapter-movie";

const initialState = {
  movies: [],
  movieCard: {},
  reviewes: [],
  favoriteMovies: []
};

const ActionType = {
  LOAD_MOVIES: `LOAD_MOVIES`,
  LOAD_MOVIE_CARD: `LOAD_MOVIE_CARD`,
  LOAD_REVIEWES: `LOAD_REVIEWES`,
  LOAD_FAVORITE_MOVIES: `LOAD_FAVORITE_MOVIES`,
};

const ActionCreator = {
  loadMovies: (movies) => {
    return {
      type: ActionType.LOAD_MOVIES,
      payload: movies,
    };
  },
  loadMovieCard: (movieCard) => {
    return {
      type: ActionType.LOAD_MOVIE_CARD,
      payload: movieCard,
    };
  },
  loadReviwes: (reviewes) => {
    return {
      type: ActionType.LOAD_REVIEWES,
      payload: reviewes,
    };
  },
  loadFavoriteMovies: (favoriteMovies) => {
    return {
      type: ActionType.LOAD_FAVORITE_MOVIES,
      payload: favoriteMovies
    };
  },
  loadMovieReviewes: (reviewes) => {
    return {
      type: ActionType.LOAD_REVIEWES,
      payload: reviewes
    }
  }
};

const Operation = {
  loadMovies: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        const movies = response.data.map((movie) => createMovie(movie));
        dispatch(ActionCreator.loadMovies(movies));
      });
  },

  loadMovieCard: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        dispatch(ActionCreator.loadMovieCard(createMovie(response.data)));
      });
  },

  loadMovieReviewes: (movieId) => (dispatch, getState, api) => {
    return api.get(`/comments/${movieId}`)
      .then((response) => {
        dispatch(ActionCreator.loadMovieReviewes(response.data));
      });
  },

  loadFavoriteMovies: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
    .then((response) => {
      if (response.data) {
        const favoriteMovies = response.data.map((m) => createMovie(m));
        dispatch(ActionCreator.loadFavoriteMovies(favoriteMovies));
      }
    });
  },

  changeMovieFavoriteStatus: (movieId, isFavorite) => (dispatch, getState, api) => {
    return api.post(`/favorite/${movieId}/${isFavorite ? 1 : 0}`)
    .then(() => {
      dispatch(Operation.loadMovies());
      dispatch(Operation.loadMovieCard());
    });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_MOVIES:
      return extend(state, {
        movies: action.payload,
      });
    case ActionType.LOAD_MOVIE_CARD:
      return extend(state, {
        movieCard: action.payload
      });
    case ActionType.LOAD_REVIEWES:
      return extend(state, {
        reviewes: action.payload
      });
    case ActionType.LOAD_FAVORITE_MOVIES:
      return extend(state, {
        favoriteMovies: action.payload,
      });
  }

  return state;
};

export {reducer, Operation, ActionType, ActionCreator};
