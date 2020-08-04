import NameSpace from '../name-space';
import {createSelector} from "reselect";
import {getMovies} from "../data/selector.js";
import {getAllGenres, filterMoviesByGenre} from "../../utils/const.js";


const NAME_SPACE = NameSpace.APP;

export const getActiveGenre = (state) => state[NAME_SPACE].activeGenre;
export const getFilteredMovies = (state) => state[NAME_SPACE].filteredMovies;
export const getGenres = (state) => state[NAME_SPACE].genres;
export const getShowedMoviesAmount = (state) => state[NAME_SPACE].showedMoviesAmount;


export const getAllMoviesGenres = createSelector(
    getMovies,
    (movies) => {
      return getAllGenres(movies);
    }
);

export const getMoviesByActiveGenre = createSelector(
    getMovies,
    getActiveGenre,
    (movies, genre) => {
      return filterMoviesByGenre(movies, genre);
    }
);


