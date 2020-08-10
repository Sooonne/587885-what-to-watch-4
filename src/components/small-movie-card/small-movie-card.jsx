import React, {PureComponent} from 'react';
import propTypes from "prop-types";
import VideoPlayer from '../video-player/video-player.jsx';
import DEFAULT_PROPTYPES from "../../prop-type-units/prop-types-units.js";
import {withRouter, Link} from 'react-router-dom';

export class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
    };

    this._handleMovieClick = this._handleMovieClick.bind(this);
  }

  _handleMovieClick() {
    const {movie, history} = this.props;
    history.push(`/films/${movie.id}`);
  }


  render() {
    const {movie} = this.props;
    return (
      <article className="small-movie-card catalog_movies-card"
        onMouseOver={() => {
          this.setState({
            isPlaying: true,
          });
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
          <Link to={`/films/${movie.id}`} className="small-movie-card__link">{movie.title}</Link>
        </h3>
      </article>
    );
  }
}

SmallMovieCard.propTypes = {
  movie: DEFAULT_PROPTYPES.MOVIE_CARD,
  history: propTypes.object.isRequired
};


export default withRouter(SmallMovieCard);
