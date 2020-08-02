import NameSpace from "../name-space.js";

const NAME_SPACE = NameSpace.DATA;

export const getMovies = (state) => state[NAME_SPACE].movies;
export const getMovieCard = (state) => state[NAME_SPACE].movieCard;
export const getReviews = (state) => state[NAME_SPACE].reviews;


