import React, {PureComponent} from 'react';
import propTypes from 'prop-types';
import DEFAULT_PROPTYPES from "../../prop-type-units/prop-types-units.js";
import {connect} from "react-redux";
import {getMovies} from "../../reducer/data/selector.js";
import {Operation as DataOperation} from "../../reducer/data/data.js";
import {withRouter} from "react-router-dom";

const ReviewLength = {
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
    const {movieCard: {id}} = this.props;
    const review = {
      ratingScore: this.state.ratingScore,
      text: this.state.text
    };
    evt.preventDefault();
    DataOperation.sendReview(id, review);
    // debugger;
    // onReviewButtonSubmit(id, review);
    // debugger;
    history.back();
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
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <a href="movie-page.html" className="breadcrumbs__link">The Grand Budapest Hotel!
                  </a>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
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
                        // disabled={isRadioDisabled}
                      />
                      <label className="rating__label" htmlFor={`star-${rating}`}>Rating {rating}</label>
                    </React.Fragment>
                  );
                })}
                {/* <input className="rating__input" id="star-1" type="radio" name="rating" value="1"/>
                <label className="rating__label" htmlFor="star-1">Rating 1</label>

                <input className="rating__input" id="star-2" type="radio" name="rating" value="2" />
                <label className="rating__label" htmlFor="star-2">Rating 2</label>

                <input className="rating__input" id="star-3" type="radio" name="rating" value="3" checked />
                <label className="rating__label" htmlFor="star-3">Rating 3</label>

                <input className="rating__input" id="star-4" type="radio" name="rating" value="4" />
                <label className="rating__label" htmlFor="star-4">Rating 4</label>

                <input className="rating__input" id="star-5" type="radio" name="rating" value="5" />
                <label className="rating__label" htmlFor="star-5">Rating 5</label> */}
              </div>
            </div>

            <div className="add-review__text">
              <textarea className="add-review__textarea"
                name="review-text" id="review-text"
                placeholder="Review text"
                onChange={this._handleReviewTextChange}
                minLength={ReviewLength.MIN}
                maxLength={ReviewLength.MAX}></textarea>


              <div className="add-review__submit">
                {/* <LinkWrapper
                  isDisabled = {this.state.isButtonDisabled}
                  link = {`/movie/${movieCard.id}`}
                > */}
                {/* <button className="add-review__btn" type="submit" disabled={this.state.isButtonDisabled}>Post</button> */}
                {/* <input className="add-review__btn" type="submit" disabled={this.state.isButtonDisabled} name="Post" placeholder="Post"/> */}
                {/* </LinkWrapper> */}
                <button className="add-review__btn" type="submit" disabled={this.state.isButtonDisabled}>Post</button>
              </div>

            </div>
          </form>
        </div>

      </section>
    );
  }
}

AddReview.propTypes = {
  // movies: propTypes.arrayOf(DEFAULT_PROPTYPES.MOVIE_CARD),
  movieCard: DEFAULT_PROPTYPES.MOVIE_CARD,
  onReviewButtonSubmit: propTypes.any,
  // match: propTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  movies: getMovies(state)
});

// const mapDispatchToProps = (dispatch) => ({
//   onReviewButtonSubmit(id, review) {
//     dispatch(DataOperation.sendReview(id, review));
//   }
// });

export default connect(mapStateToProps)(withRouter(AddReview));
// export default connect(mapStateToProps, mapDispatchToProps)(AddReview);

