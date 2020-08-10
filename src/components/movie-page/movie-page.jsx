import React from "react";
import propTypes from "prop-types";
import Footer from '../footer/footer.jsx';
import MovieLikeThis from "../movie-like-this/movie-like-this.jsx";
import DEFAULT_PROPTYPES from "../../prop-type-units/prop-types-units.js";
import {PageName} from "../../utils/const.js";
import Header from "../header/header.jsx";
import {Link} from "react-router-dom";
import MyListButton from "../my-list-button/my-list-button.jsx";
import withActiveItem from "../../hocs/with-active-item.jsx";
import MovieCardInfo from "../movie-card-info/movie-card-info.jsx";

const MovieCardInfoWrapped = withActiveItem(MovieCardInfo);

export const MoviePage = ({movieCard, movies}) => {
  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={movieCard.bg} alt={movieCard.title}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header/>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{movieCard.title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{movieCard.genre}</span>
                <span className="movie-card__year">{movieCard.release}</span>
              </p>

              <div className="movie-card__buttons">
                <Link className="btn btn--play movie-card__button" to={`/player/${movieCard.id}`}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <MyListButton
                  movie = {movieCard}
                />
                <Link to={`./${movieCard.id}/review`} className="btn movie-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <MovieCardInfoWrapped

          movieCard = {movieCard}
          defaultItem = {PageName.INFO}
        />
      </section>

      <div className="page-content">
        <MovieLikeThis
          movieCard = {movieCard}
          movies = {movies}
        />

        <Footer/>
      </div>
    </React.Fragment>
  );


};

MoviePage.propTypes = {
  movieCard: DEFAULT_PROPTYPES.MOVIE_CARD,
  movies: propTypes.arrayOf(DEFAULT_PROPTYPES.MOVIE_CARD),
};

export default MoviePage;


