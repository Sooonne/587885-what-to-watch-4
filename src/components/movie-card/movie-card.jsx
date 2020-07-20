import React, {PureComponent} from 'react';
import propTypes from "prop-types";
// import VideoPlayer from '../video-player/video-player';
import VideoPlayer from '../video-player/video-player.jsx';
import DEFAULT_PROPTYPES from "../../prop-type-units/prop-types-units.js";

export default class MovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this._movie = this.props.movie;

    this.state = {
      isPlaying: false,
    };

    this._handleMovieClick = this._handleMovieClick.bind(this);
  }

  _handleMovieClick(evt) {
    const onMovieClick = this.props.onMovieClick;
    evt.preventDefault();
    onMovieClick(this._movie);
  }

  render() {
    const onMovieCardHover = this.props.onMovieCardHover;

    return (
      <article className="small-movie-card catalog__movies-card"
        onMouseOver={() => {
          this.setState({
            isPlaying: true,
          });
          onMovieCardHover(this._movie);
        }}
        onMouseOut={() => {
          this.setState({
            isPlaying: false,
          });
        }}
        onClick={this._handleMovieClick}>
        <div className="small-movie-card__image">
          <VideoPlayer
            isPlaying={this.state.isPlaying}
            src={this._movie.src}
            poster={this._movie.poster}
          />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">{this._movie.title}</a>
        </h3>
      </article>
    );
  }
}

MovieCard.propTypes = {
  movie: DEFAULT_PROPTYPES.MOVIE_CARD,
  onMovieClick: propTypes.func.isRequired,
  onMovieCardHover: propTypes.func.isRequired,
};


