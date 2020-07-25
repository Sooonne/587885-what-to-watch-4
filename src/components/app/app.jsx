import React, {PureComponent} from "react";
import propTypes from "prop-types";
import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import DEFAULT_PROPTYPES from "../../prop-type-units/prop-types-units.js";
import {PAGES} from "../../utils/const.js";
import {connect} from "react-redux";
import {getAllGenres, getReviewsForMovie} from "../../utils/const.js";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: PAGES.MAIN,
      currentMovie: this.props.movieCard,
    };

    this.handleMovieClick = this.handleMovieClick.bind(this);
  }

  _renderApp() {
    // const {movieCard, movies, reviews} = this.props;
    const {movies, reviews} = this.props;
    const {currentPage, currentMovie} = this.state;


    if (currentPage === PAGES.MAIN) {
      return (
        <Main
          // movieCard = {movieCard}
          // movies = {movies}
          genres = {getAllGenres(movies)}
          onMovieClick = {this.handleMovieClick}
        />
      );
    }

    if (currentPage === PAGES.MOVIE) {
      return (
        <MoviePage
          movieCard = {currentMovie}
          movies = {movies}
          reviews = {getReviewsForMovie(reviews, currentMovie)}
          onMovieClick = {this.handleMovieClick}
        />
      );
    }

    return null;
  }

  handleMovieClick(movie) {
    this.setState({
      currentPage: PAGES.MOVIE,
      currentMovie: movie,
    });
  }

  render() {

    return (
      <Router>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-film">
            <MoviePage
              movieCard={this.state.currentMovie}
              movies = {this.props.movies}
              reviews = {this.props.reviews}
              onMovieClick = {this.handleMovieClick}
            />
          </Route>
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  movies: propTypes.arrayOf(DEFAULT_PROPTYPES.MOVIE_CARD),
  // movieCard: DEFAULT_PROPTYPES.MOVIE_CARD,
  movieCard: DEFAULT_PROPTYPES.MOVIE_CARD,
  reviews: propTypes.arrayOf(DEFAULT_PROPTYPES.REVIEW)
};

const mapStateToProps = (state) => ({
  movieCard: state.movieCard,
  movies: state.movies,
  reviews: state.reviews,
});

export {App};
export default connect(mapStateToProps)(App);
