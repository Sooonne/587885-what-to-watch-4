import React from 'react';
import propTypes from 'prop-types';
import DEFAULT_PROPTYPES from "../../prop-type-units/prop-types-units.js";
import {Link} from "react-router-dom";
import HeaderLogo from '../header-logo/header-logo.jsx';
import HeaderUser from "../header-user/header-user.jsx";
import {SubmitStatus, ReviewLength, RATINGS_MAX_STARS} from "../../utils/const.js";

export const AddReview = ({movieCard, submitStatus, onSubmitClick,
  onRatingChange, onReviewChange, isSubmitDisabled}) => {
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
                <Link to={`/films/${movieCard.id}`} className="breadcrumbs__link">{movieCard.title}</Link>
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
          onSubmit={onSubmitClick}>
          <div className="rating">
            <div className="rating__stars" onChange={onRatingChange}>
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
              onChange={onReviewChange}
              minLength={ReviewLength.MIN}
              maxLength={ReviewLength.MAX}></textarea>


            <div className="add-review__submit">
              <button className="add-review__btn" type="submit" disabled={isSubmitDisabled}
              >Post</button>
            </div>
          </div>

          {/* {this._showError()} */}
          {submitStatus === SubmitStatus.ERROR && <p style={{color: `tomato`, textAlign: `center`}}>We have some problems! Try to post yout review later.</p>}
        </form>
      </div>

    </section>
  );
};

AddReview.propTypes = {
  movieCard: DEFAULT_PROPTYPES.MOVIE_CARD,
  submitStatus: propTypes.string.isRequired,
  onSubmitClick: propTypes.func.isRequired,
  onReviewChange: propTypes.func.isRequired,
  isSubmitDisabled: propTypes.bool.isRequired,
  onRatingChange: propTypes.func.isRequired,
};

export default AddReview;
