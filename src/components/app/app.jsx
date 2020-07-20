import React, {PureComponent} from "react";
import propTypes from "prop-types";
import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import DEFAULT_PROPTYPES from "../../prop-type-units/prop-types-units.js";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: `main`,
      currentMovie: this.props.movieCard,
    };

    this.handleMovieClick = this.handleMovieClick.bind(this);
  }

  _renderApp() {
    const {movieCard, movies, reviews} = this.props;
    const {currentPage, currentMovie} = this.state;

    if (currentPage === `main`) {
      return (
        <Main
          promoInfo = {movieCard}
          movies = {movies}
          onMovieClick = {this.handleMovieClick}
        />
      );
    }

    if (currentPage === `movie`) {
      return (
        <MoviePage
          movieCard = {currentMovie}
          movies = {movies}
          reviews = {reviews}
          onMovieClick = {this.handleMovieClick}
        />
      );
    }

    return null;
  }

  handleMovieClick(movie) {
    this.setState({
      currentPage: `movie`,
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
  movieCard: DEFAULT_PROPTYPES.MOVIE_CARD,
  reviews: propTypes.arrayOf(DEFAULT_PROPTYPES.REVIEW)
};

export default App;
