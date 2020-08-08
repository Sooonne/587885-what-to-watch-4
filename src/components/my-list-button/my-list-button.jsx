import React from 'react';
import propTypes from 'prop-types';
import DEFAULT_PROPTYPES from "../../prop-type-units/prop-types-units.js";
import {connect} from 'react-redux';
import {Operation as DataOperation} from '../../reducer/data/data.js';
import {AuthorizationStatus} from "../../utils/const.js";
import {getAuthorizationStatus} from "../../reducer/user/selector.js";
import {withRouter} from 'react-router-dom';


const MyListButton = ({authStatus, movie, changeMovieFavoriteStatus, history}) => {
  const handleClick = (isFavorite) => {
    return (authStatus === AuthorizationStatus.AUTH) ? changeMovieFavoriteStatus(movie.id, isFavorite) : history.push(`/login`);
  };

  const buttonAdd = () => {
    return (
      <button className="btn btn--list movie-card__button" type="button"
        onClick={() => handleClick(true)}>
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>
        <span>My list</span>
      </button>
    );
  };

  const buttonRemove = () => {
    return (
      <button className="btn btn--list movie-card__button" type="button"
        onClick={() => handleClick(false)}>
        <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#in-list"></use>
        </svg>
        <span>My list</span>
      </button>
    );
  };

  return (
    <React.Fragment>
      {movie.isFavorite ? buttonRemove() : buttonAdd()}
    </React.Fragment>
  );
};

MyListButton.propTypes = {
  authStatus: propTypes.string.isRequired,
  movie: DEFAULT_PROPTYPES.MOVIE_CARD,
  changeMovieFavoriteStatus: propTypes.func.isRequired,
  history: propTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  authStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeMovieFavoriteStatus(movieId, isFavorite) {
    dispatch(DataOperation.changeMovieFavoriteStatus(movieId, isFavorite));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MyListButton));
