import React, {PureComponent} from "react";
import propTypes from "prop-types";
import Footer from '../footer/footer.jsx';
import MovieLikeThis from "../movie-like-this/movie-like-this.jsx";
import MovieNav from "../movie-nav/movie-nav.jsx";
import MoviePageInfo from "../movie-page-info/movie-page-info.jsx";
import MoviePageDetails from "../movie-page-details/movie-page-details.jsx";
import MoviePageReviews from "../movie-page-reviews/movie-page-reviews.jsx";
import DEFAULT_PROPTYPES from "../../prop-type-units/prop-types-units.js";
import {PageName} from "../../utils/const.js";
import Header from "../header/header.jsx";
import {Link} from "react-router-dom";
import MyListButton from "../my-list-button/my-list-button.jsx";

export class MoviePage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: PageName.INFO
    };

    this.handleNavClick = this.handleNavClick.bind(this);
  }

  handleNavClick(nav) {
    this.setState({
      currentPage: nav
    });
  }

  _renderMoviePage(movieCard) {

    const {currentPage} = this.state;

    if (currentPage === PageName.INFO) {
      return <MoviePageInfo
        movieCard = {movieCard}
      />;
    }

    if (currentPage === PageName.DETAILS) {
      return <MoviePageDetails
        movieCard = {movieCard}
      />;
    }

    if (currentPage === PageName.REVIEWS) {
      return <MoviePageReviews
        movieCard = {movieCard}
      />;
    }

    return null;
  }

  render() {
    const {movieCard, movies} = this.props;

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

                {this._renderMoviePage(movieCard)}
              </div>
            </div>
          </div>
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

  }
}

MoviePage.propTypes = {
  movieCard: DEFAULT_PROPTYPES.MOVIE_CARD,
  movies: propTypes.arrayOf(DEFAULT_PROPTYPES.MOVIE_CARD),
};

export default MoviePage;


