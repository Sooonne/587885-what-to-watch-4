import React from "react";
import propTypes from "prop-types";
import MovieNav from "../movie-nav/movie-nav.jsx";
import MoviePageInfo from "../movie-page-info/movie-page-info.jsx";
import MoviePageDetails from "../movie-page-details/movie-page-details.jsx";
import MoviePageReviews from "../movie-page-reviews/movie-page-reviews.jsx";
import DEFAULT_PROPTYPES from "../../prop-type-units/prop-types-units.js";
import {PageName} from "../../utils/const.js";

const MovieCardInfo = ({activeItem, movieCard, onItemClick}) => {
  const renderScreen = (currentActiveItem) => {
    // const {currentPage} = this.state;

    if (currentActiveItem === PageName.INFO) {
      return <MoviePageInfo
        movieCard = {movieCard}
      />;
    }

    if (currentActiveItem === PageName.DETAILS) {
      return <MoviePageDetails
        movieCard = {movieCard}
      />;
    }

    if (currentActiveItem === PageName.REVIEWS) {
      return <MoviePageReviews
        movieCard = {movieCard}
      />;
    }

    return null;
  };

  return (
    <div className="movie-card__wrap movie-card__translate-top">
      <div className="movie-card__info">
        <div className="movie-card__poster movie-card__poster--big">
          <img src={movieCard.poster} alt={movieCard.title} width="218" height="327" />
        </div>

        <div className="movie-card__desc">
          <MovieNav
            currentActivePage = {activeItem}
            onNavClick = {onItemClick}
          />

          {renderScreen(activeItem)}
        </div>
      </div>
    </div>
  );

};

MovieCardInfo.propTypes = {
  movieCard: DEFAULT_PROPTYPES.MOVIE_CARD,
  activeItem: propTypes.string.isRequired,
  defaultItem: propTypes.string.isRequired,
  onItemClick: propTypes.func.isRequired,
};


export default MovieCardInfo;


