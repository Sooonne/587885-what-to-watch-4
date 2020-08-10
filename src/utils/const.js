export const AppRoute = {
  LOGIN: `/login`,
  MY_LIST: `/mylist`,
  MOVIE: `/films`,
  PLAYER: `/player`,
  ROOT: `/`,
};

export const SubmitStatus = {
  DEFAULT: `Default`,
  SUCCESS: `Success`,
  ERROR: `Error`,
};

export const SEC_IN_MIN = 60;


export const PageName = {
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
  NO_AUTH: `NO_AUTH`,
  NOT_CHECKED: `NOT_CHECKED`
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

const RatingLevel = {
  BAD: 0,
  NORMAL: 3,
  GOOD: 5,
  VERY_GOOD: 8,
  AWESOME: 10,
};

export const getRating = (rating) => {
  if (rating >= RatingLevel.BAD && rating < RatingLevel.NORMAL) {
    return `Bad`;
  } else if (rating >= RatingLevel.NORMAL && rating < RatingLevel.GOOD) {
    return `Normal`;
  } else if (rating >= RatingLevel.GOOD && rating < RatingLevel.VERY_GOOD) {
    return `Good`;
  } else if (rating >= RatingLevel.VERY_GOOD && rating < RatingLevel.AWESOME) {
    return `Very good`;
  } else {
    return `Awesome`;
  }
};

const Months = {
  0: `January`,
  1: `February`,
  2: `March`,
  3: `April`,
  4: `May`,
  5: `June`,
  6: `July`,
  7: `August`,
  8: `September`,
  9: `October`,
  10: `November`,
  11: `December`
};

export const getReviewDateFormat = (data) => {
  const date = new Date(data);
  const month = Months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month} ${day}, ${year}`;
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


  return filteredMovies.slice(0, MAX_AMOUNT);
};
