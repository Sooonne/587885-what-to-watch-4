import NameSpace from "../name-space.js";
const NAME_SPACE = NameSpace.DATA;

export const getMovies = (state) => state[NAME_SPACE].movies;
export const getMovieCard = (state) => state[NAME_SPACE].movieCard;
export const getReviewes = (state) => state[NAME_SPACE].reviewes;
export const getMoviesFromMyList = (state) => state[NAME_SPACE].favoriteMovies;
export const getSubmitStatus = (state) => state[NAME_SPACE].submitStatus;

