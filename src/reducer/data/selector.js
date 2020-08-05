import NameSpace from "../name-space.js";
// import {createSelector} from "reselect";
// import {getFavoriteMovies} from "../../utils/const.js";
// import { createMovie } from "../../adapter/adapter-movie.js";
const NAME_SPACE = NameSpace.DATA;

export const getMovies = (state) => state[NAME_SPACE].movies;
export const getMovieCard = (state) => state[NAME_SPACE].movieCard;
export const getReviewes = (state) => state[NAME_SPACE].reviewes;
export const getMoviesFromMyList = (state) => state[NAME_SPACE].favoriteMovies;


// export const getMoviesFromMyList = createSelector(
//     getMovies,
//     (movies) => {
//       return getFavoriteMovies(movies);
//     }
// );
