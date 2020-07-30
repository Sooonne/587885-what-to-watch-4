import React from 'react';
import propTypes, {string} from "prop-types";
import MovieList from '../movie-list/movie-list.jsx';
import Footer from '../footer/footer.jsx';
import DEFAULT_PROPTYPES from "../../prop-type-units/prop-types-units.js";
import GenresList from '../genres-list/genres-list.jsx';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer.js';
import ButtonMore from '../button-more/button-more.jsx';
import MovieCardHeader from "../movie-card-header/movie-card-header.jsx";

export const Main = ({movieCard, genres, activeGenre, onGenreClick, filteredMovies, onButtonMoreClick, showedMoviesAmount}) => {
  const displayedMovies = filteredMovies.slice(0, showedMoviesAmount);
  return (
    <React.Fragment>
      <MovieCardHeader
        movieCard = {movieCard}
      />

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList
            genres = {genres}
            activeGenre = {activeGenre}
            onGenreClick = {onGenreClick}
          />

          <MovieList
            movies = {displayedMovies}
          />
          {showedMoviesAmount < filteredMovies.length && <ButtonMore
            onButtonMoreClick = {onButtonMoreClick}/>}

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
  filteredMovies: propTypes.arrayOf(DEFAULT_PROPTYPES.MOVIE_CARD),
  showedMoviesAmount: propTypes.number.isRequired,
  onButtonMoreClick: propTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  movieCard: state.movieCard,
  movies: state.movies,
  activeGenre: state.activeGenre,
  filteredMovies: state.filteredMovies,
  genres: state.genres,
  showedMoviesAmount: state.showedMoviesAmount,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(genre) {
    dispatch(ActionCreator.getMoviesByGenre(genre));
    dispatch(ActionCreator.setActiveGenre(genre));
    dispatch(ActionCreator.resetShowedMovies());
  },
  onButtonMoreClick() {
    dispatch(ActionCreator.showMoreMovies());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
