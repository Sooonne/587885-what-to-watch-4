import React from "react";
import propTypes from "prop-types";
import Header from "../header/header.jsx";
import {Link} from "react-router-dom";
import MyListButton from "../my-list-button/my-list-button.jsx";

const MovieCardHeader = ({movieCard}) => {
  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header/>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{movieCard.title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{movieCard.genre}</span>
                <span className="movie-card__year">{movieCard.release}</span>
              </p>

              <div className="movie-card__buttons">
                {/* <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button> */}
                <Link className="btn btn--play movie-card__button" to={`/player/${movieCard.id}`}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                {/* <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button> */}
                <MyListButton
                  movie={movieCard}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

MovieCardHeader.propTypes = {
  movieCard: propTypes.object.isRequired,
};

export default MovieCardHeader;

