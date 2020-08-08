import React, {PureComponent} from 'react';
import propTypes from 'prop-types';
import DEFAULT_PROPTYPES from "../../prop-type-units/prop-types-units.js";
import {connect} from "react-redux";
import {getMovies} from "../../reducer/data/selector.js";
import {Operation as DataOperation} from "../../reducer/data/data.js";
import {Link, withRouter} from "react-router-dom";
import HeaderLogo from '../header-logo/header-logo.jsx';
import HeaderUser from "../header-user/header-user.jsx";

export const ReviewLength = {
  MIN: 50,
  MAX: 400,
};

export const RATINGS_MAX_STARS = 5;

export class AddReview extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      ratingScore: 5,
      text: ``,
      isButtonDisabled: true,
    };

    this._handleReviewTextChange = this._handleReviewTextChange.bind(this);
    this._handleRatingChange = this._handleRatingChange.bind(this);
    this._handleSubmitButtonClick = this._handleSubmitButtonClick.bind(this);
  }

  _handleRatingChange(evt) {
    this.setState({
      ratingScore: evt.target.value
    });
  }

  _handleReviewTextChange(evt) {
    this.setState({
      text: evt.target.value,
      isButtonDisabled: evt.target.value < ReviewLength.MIN || evt.target.value > ReviewLength.MAX,
    });
  }

  _handleSubmitButtonClick(evt) {
    evt.preventDefault();
    const {movieCard: {id}, onReviewButtonSubmit, history} = this.props;
    const review = {
      ratingScore: this.state.ratingScore,
      text: this.state.text
    };
    onReviewButtonSubmit(id, review)
    .then(() => {
      history.push(`/movie/${id}`);
    });
  }

  render() {
    const {movieCard} = this.props;
    return (
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={movieCard.bg} alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <HeaderLogo/>

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={`/movie/${movieCard.id}`} className="breadcrumbs__link">{movieCard.title}</Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>
            <HeaderUser/>
          </header>

          <div className="movie-card__poster movie-card__poster--small">
            <img src={movieCard.poster} alt={movieCard.title} width="218" height="327" />
          </div>
        </div>

        <div className="add-review">
          <form action="#" className="add-review__form"
            onSubmit={this._handleSubmitButtonClick}>
            <div className="rating">
              <div className="rating__stars" onChange={this._handleRatingChange}>
                {Array.from(Array(RATINGS_MAX_STARS)).map((_, index) => {
                  const rating = index + 1;
                  return (
                    <React.Fragment key={rating}>
                      <input
                        className="rating__input"
                        id={`star-${rating}`}
                        type="radio"
                        name="rating"
                        value={rating}
                      />
                      <label className="rating__label" htmlFor={`star-${rating}`}>Rating {rating}</label>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

            <div className="add-review__text">
              <textarea className="add-review__textarea"
                name="comment" id="review-text"
                placeholder="Review text"
                onChange={this._handleReviewTextChange}
                minLength={ReviewLength.MIN}
                maxLength={ReviewLength.MAX}></textarea>


              <div className="add-review__submit">
                <button className="add-review__btn" type="submit" disabled={this.state.isButtonDisabled}
                >Post</button>
              </div>
            </div>


          </form>
        </div>

      </section>
    );
  }
}

AddReview.propTypes = {
  movieCard: DEFAULT_PROPTYPES.MOVIE_CARD,
  onReviewButtonSubmit: propTypes.any,
  history: propTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  movies: getMovies(state)
});

const mapDispatchToProps = (dispatch) => ({
  onReviewButtonSubmit(id, review) {
    return dispatch(DataOperation.sendReview(id, review));
  }
});

// export default connect(mapStateToProps)(withRouter(AddReview));
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddReview));

