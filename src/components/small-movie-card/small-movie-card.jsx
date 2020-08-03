import React, {PureComponent} from 'react';
import propTypes from "prop-types";
import VideoPlayer from '../video-player/video-player.jsx';
import DEFAULT_PROPTYPES from "../../prop-type-units/prop-types-units.js";
import {withRouter} from 'react-router-dom/cjs/react-router-dom.min';

class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
    };

    this._handleMovieClick = this._handleMovieClick.bind(this);
  }

  _handleMovieClick() {
    const {movie, history} = this.props;
    history.push(`/movie/${movie.id}`);
  }


  render() {
    const onMovieCardHover = this.props.onMovieCardHover;
    const {movie} = this.props;
    console.log(this.state.isPlaying);
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

SmallMovieCard.propTypes = {
  movie: DEFAULT_PROPTYPES.MOVIE_CARD,
  onMovieCardHover: propTypes.func.isRequired,
  history: propTypes.object.isRequired
};


export default withRouter(SmallMovieCard);
