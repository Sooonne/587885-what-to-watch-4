export const AppRoute = {
  LOGIN: `/login`,
  MY_LIST: `/mylist`,
  MOVIE: `/movie`,
  PLAYER: `/player`,
  ROOT: `/`,
};

export const SEC_IN_MIN = 60;


export const PAGE_NAMES = {
  INFO: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};

export const PAGES = {
  MAIN: `main`,
  MOVIE: `movie`,
  SIGN_IN: `signIn`,
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`
};

export const ALL_GENRES = `All genres`;
export const MAX_GENRES_AMOUNT = 10;

export const extend = (state, newStateValue) => {
  return Object.assign({}, state, newStateValue);
};

export const filterMoviesByGenre = (allMovies, activeGenre) => {
  if (activeGenre === ALL_GENRES) {
    return allMovies;
  }
  return allMovies.filter((it) => it.genre === activeGenre);
};

export const getFavoriteMovies = (allMovies) => {
  return allMovies.filter((it) => it.isFavorite === true);
};

export const getReviewsForMovie = (allReviews, movie) => {
  return allReviews.filter((it) => it.id === movie.id);
};

export const getAllGenres = (allMovies) => {
  const genres = new Set(allMovies.map((it) => it.genre));
  return [ALL_GENRES].concat(...genres);
};

export const getMaxGenres = (genres) => {
  return genres.slice(0, MAX_GENRES_AMOUNT);
};

export const addPrefixtoUrl = (url, prefix) => {
  return prefix + url;
};

export const SHOWED_MOVIES_AMOUNT = 8;


export const getRating = (rating) => {
  if (rating >= 0 && rating < 3) {
    return `Bad`;
  } else if (rating >= 3 && rating < 5) {
    return `Normal`;
  } else if (rating >= 5 && rating < 8) {
    return `Good`;
  } else if (rating >= 8 && rating < 10) {
    return `Very good`;
  } else {
    return `Awesome`;
  }
};

export const getMovieTimeFormat = (movieTime) => {
  const hours = Math.floor(movieTime / 60);
  const minutes = movieTime - hours * 60;
  return `${hours}h ${minutes}m`;
};

export const countLeftTimeformat = (progress, duration) => {
  const leftTime = duration - progress;

  const minutes = Math.trunc(leftTime / SEC_IN_MIN);
  const seconds = Math.trunc(leftTime % SEC_IN_MIN);
  const hours = Math.trunc(minutes / SEC_IN_MIN);
  return `${hours}:${minutes}:${seconds}`;
};

export const splitArray = (array, firstSlice, lastSlice) => {
  return array.slice(firstSlice, lastSlice);
};

export const MAX_AMOUNT = 4;

// eslint-disable-next-line no-unused-vars
export function compareRandom(a, b) {
  return Math.random() - 0.5;
}

export const getSimilarFilmsByGenre = (allMovies, currentMovie) => {
  let filteredMovies = allMovies.filter((it) => {
    return it.genre === currentMovie.genre && it !== currentMovie;
  });
  filteredMovies.sort(compareRandom);
  filteredMovies.slice(0, MAX_AMOUNT);

  return filteredMovies;
};
