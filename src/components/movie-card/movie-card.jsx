import React, {PureComponent} from 'react';
import propTypes from "prop-types";
// import VideoPlayer from '../video-player/video-player';
import VideoPlayer from '../video-player/video-player.jsx';

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
  movie: propTypes.shape({
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
  }),
  onMovieClick: propTypes.func.isRequired,
  onMovieCardHover: propTypes.func.isRequired,
};


