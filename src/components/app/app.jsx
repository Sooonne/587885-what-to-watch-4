import React, {PureComponent} from "react";
import propTypes from "prop-types";
import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

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
    const {movieCard, movies} = this.props;
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
  movies: propTypes.arrayOf(propTypes.shape({
    title: propTypes.string.isRequired,
    genre: propTypes.string.isRequired,
    release: propTypes.number.isRequired,
    bg: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    director: propTypes.string.isRequired,
    starring: propTypes.arrayOf(propTypes.string.isRequired).isRequired,
    ratingScore: propTypes.number.isRequired,
    ratingCount: propTypes.number.isRequired,
    src: propTypes.string.isRequired
  })),
  movieCard: propTypes.shape({
    title: propTypes.string.isRequired,
    genre: propTypes.string.isRequired,
    release: propTypes.number.isRequired,
    bg: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    director: propTypes.string.isRequired,
    starring: propTypes.arrayOf(propTypes.string.isRequired).isRequired,
    ratingScore: propTypes.number.isRequired,
    ratingCount: propTypes.number.isRequired,
    src: propTypes.string.isRequired
  }).isRequired
};

export default App;
