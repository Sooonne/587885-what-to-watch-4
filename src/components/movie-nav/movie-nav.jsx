import React from "react";
import propTypes from "prop-types";
import {PageName} from "../../utils/const.js";

const navs = Object.values(PageName);

const MovieNav = ({currentActivePage, onNavClick}) => {
  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">

        {navs.map((nav) => {
          return (
            <li
              key = {nav}
              className={`movie-nav__item ${nav === currentActivePage ? `movie-nav__item--active` : ``}`}>
              <a
                href="#"
                className="movie-nav__link"
                onClick={(evt) => {
                  evt.preventDefault();
                  onNavClick(nav);
                }}
              >{nav}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

MovieNav.propTypes = {
  currentActivePage: propTypes.string.isRequired,
  onNavClick: propTypes.func.isRequired,
};

export default MovieNav;
