import React from 'react';
import propTypes, {string} from "prop-types";
import MovieList from '../movie-list/movie-list.jsx';
import Footer from '../footer/footer.jsx';
import DEFAULT_PROPTYPES from "../../prop-type-units/prop-types-units.js";
import GenresList from '../genres-list/genres-list.jsx';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer.js';

export const Main = ({movieCard, genres, activeGenre, onGenreClick, filteredMovies}) => {

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

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
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList
            genres = {genres}
            activeGenre = {activeGenre}
            onGenreClick = {onGenreClick}
          />

          <MovieList
            movies = {filteredMovies}
          />


          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer/>
      </div>
    </React.Fragment>
  );
};

Main.propTypes = {
  movieCard: propTypes.object.isRequired,
  // movies: propTypes.arrayOf(DEFAULT_PROPTYPES.MOVIE_CARD),
  genres: propTypes.arrayOf(string),
  activeGenre: propTypes.string.isRequired,
  onGenreClick: propTypes.func.isRequired,
  filteredMovies: propTypes.arrayOf(DEFAULT_PROPTYPES.MOVIE_CARD)
};

const mapStateToProps = (state) => ({
  movieCard: state.movieCard,
  movies: state.movies,
  activeGenre: state.activeGenre,
  filteredMovies: state.filteredMovies,
  genres: state.genres,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(genre) {
    dispatch(ActionCreator.getMoviesByGenre(genre));
    dispatch(ActionCreator.setActiveGenre(genre));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
