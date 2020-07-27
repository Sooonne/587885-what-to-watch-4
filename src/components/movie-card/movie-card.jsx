import React, {PureComponent} from 'react';
import propTypes from "prop-types";
// import VideoPlayer from '../video-player/video-player';
import VideoPlayer from '../video-player/video-player.jsx';
import DEFAULT_PROPTYPES from "../../prop-type-units/prop-types-units.js";
// import {NavLink} from 'react-router-dom';
import {withRouter} from 'react-router-dom/cjs/react-router-dom.min';

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);

    // movie = this.props.movie;

    this.state = {
      isPlaying: false,
    };

    this._handleMovieClick = this._handleMovieClick.bind(this);
  }

  _handleMovieClick() {
    // const onMovieClick = this.props.onMovieClick;
    // evt.preventDefault();
    // onMovieClick(this.movie);
    const {movie, history} = this.props;
    history.push(`/movie/${movie.id}`);
  }


  render() {
    const onMovieCardHover = this.props.onMovieCardHover;
    const {movie} = this.props;
    // to = {`/movie/${movie.id}`}>

    return (
      <article className="small-movie-card catalog_movies-card"
        onMouseOver={() => {
          this.setState({
            isPlaying: true,
          });
          onMovieCardHover(movie);
        }}
        onMouseOut={() => {
          this.setState({
            isPlaying: false,
          });
        }}
        onClick = {this._handleMovieClick}
      >
        <div className="small-movie-card__image">
          <VideoPlayer
            isPlaying={this.state.isPlaying}
            src={movie.src}
            poster={movie.poster}
          />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">{movie.title}</a>
        </h3>
      </article>
    );
  }
}

MovieCard.propTypes = {
  movie: DEFAULT_PROPTYPES.MOVIE_CARD,
  // onMovieClick: propTypes.func.isRequired,
  onMovieCardHover: propTypes.func.isRequired,
  // match: propTypes.object.isRequired,
  // location: propTypes.object.isRequired,
  history: propTypes.object.isRequired
};


export default withRouter(MovieCard);
