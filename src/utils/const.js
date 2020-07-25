export const PAGE_NAMES = {
  INFO: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};

export const PAGES = {
  MAIN: `main`,
  MOVIE: `movie`,
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

export const getReviewsForMovie = (allReviews, movie) => {
  return allReviews.filter((it) => it.id === movie.genre);
};

export const getAllGenres = (allMovies) => {
  const genres = new Set(allMovies.map((it) => it.genre));
  return [ALL_GENRES].concat(...genres);
};

export const getMaxGenres = (genres) => {
  return genres.slice(0, MAX_GENRES_AMOUNT);
};

