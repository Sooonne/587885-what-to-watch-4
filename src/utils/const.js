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

// export const getElapsedTime = (duration, progress) => {
//   const dHours = Math.floor(duration / 360);
//   const pHours = Math.floor(progress / 360);
//   const dMinutes = Math.floor(d);
// };

