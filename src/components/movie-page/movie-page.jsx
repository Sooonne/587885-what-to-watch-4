import React, {PureComponent} from "react";
import propTypes from "prop-types";
import Footer from '../footer/footer.jsx';
import MovieLikeThis from "../movie-like-this/movie-like-this.jsx";
import MovieNav from "../movie-nav/movie-nav.jsx";
import MoviePageInfo from "../movie-page-info/movie-page-info.jsx";
import MoviePageDetails from "../movie-page-details/movie-page-details.jsx";
import MoviePageReviews from "../movie-page-reviews/movie-page-reviews.jsx";
import DEFAULT_PROPTYPES from "../../prop-type-units/prop-types-units.js";
import {PAGE_NAMES} from "../../utils/const.js";


export default class MoviePage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: PAGE_NAMES.INFO
    };

    this.handleNavClick = this.handleNavClick.bind(this);
  }

  handleNavClick(nav) {
    this.setState({
      currentPage: nav
    });
  }

  _renderMoviePage() {
    const {movieCard, reviews} = this.props;
    const {currentPage} = this.state;

    if (currentPage === PAGE_NAMES.INFO) {
      return <MoviePageInfo
        movieCard = {movieCard}
      />;
    }

    if (currentPage === PAGE_NAMES.DETAILS) {
      return <MoviePageDetails
        movieCard = {movieCard}
      />;
    }

    if (currentPage === PAGE_NAMES.REVIEWS) {
      return <MoviePageReviews
        comments = {reviews}
      />;
    }

    return null;
  }

  render() {
    const {movieCard, movies, onMovieClick} = this.props;
    return (
      <React.Fragment>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={movieCard.bg} alt={movieCard.title} />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header movie-card__head">
              <div className="logo">
                <a href="main.html" className="logo__link">
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
                  <a href="add-review.html" className="btn movie-card__button">Add review</a>
                </div>
              </div>
            </div>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img src={movieCard.poster} alt={movieCard.title} width="218" height="327" />
              </div>

              <div className="movie-card__desc">
                <MovieNav
                  currentActivePage = {this.state.currentPage}
                  onNavClick = {this.handleNavClick}
                />

                {this._renderMoviePage()}
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <MovieLikeThis
            movieCard = {movieCard}
            movies = {movies}
            onMovieClick = {onMovieClick}
          />

          <Footer/>
        </div>
      </React.Fragment>
    );

  }
}

MoviePage.propTypes = {
  movieCard: DEFAULT_PROPTYPES.MOVIE_CARD,
  movies: propTypes.arrayOf(DEFAULT_PROPTYPES.MOVIE_CARD),
  reviews: propTypes.arrayOf(DEFAULT_PROPTYPES.REVIEW),
  onMovieClick: propTypes.func.isRequired
};

// export default MoviePage;
