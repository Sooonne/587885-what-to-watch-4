import React from "react";
import propTypes from "prop-types";
import {getMaxGenres} from "../../utils/const.js";

const GenresList = ({genres, activeGenre, onGenreClick}) => {
  const slicesGenres = getMaxGenres(genres);
  // console.log(genres);

  return (
    <ul className="catalog__genres-list">
      {slicesGenres.map((genre, index) => {
        return (
          <li
            key={genre + index}
            className={`catalog__genres-item ${genre === activeGenre ? `catalog__genres-item--active` : ``}`}>
            <a
              href="#"
              className="catalog__genres-link"
              onClick={(evt) => {
                evt.preventDefault();
                onGenreClick(genre);
              }}
            >{genre}</a>
          </li>
        );
      })}
    </ul>
  );
};

GenresList.propTypes = {
  genres: propTypes.arrayOf(propTypes.string.isRequired).isRequired,
  activeGenre: propTypes.string.isRequired,
  onGenreClick: propTypes.func.isRequired,
};

export default GenresList;
