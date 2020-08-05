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
    const {match: {params: {id}}, onReviewButtonSubmit} = this.props;
    // const {onReviewButtonSubmit} = this.props;
    // const movieCard = movies.find((m) => m.id === +id);
    const review = {
      rstingScore: this.state.ratingScore,
      text: this.state.text
    };
    evt.preventDefault();
    onReviewButtonSubmit(id, review);
  }

  render() {
    const {movies, match: {params: {id}}} = this.props;
    const movieCard = movies.find((m) => m.id === +id);
    debugger;
    // console.log(movies, id);
    // const movieCard = {title: `Star Wars`,
    //   genre: `Drama`,
    //   release: 2017,
    //   img: `/img/the-grand-budapest-hotel.jpg`,
    //   bg: `/img/bg-the-grand-budapest-hotel.jpg`,
    //   poster: `/img/the-grand-budapest-hotel-poster.jpg`,
    //   description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    //   director: `Wes Andreson`,
    //   starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    //   ratingScore: 8.9,
    //   ratingCount: 240,
    //   id: 9,
    //   src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    //   srcFull: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    //   bgColor: `#ffffff`,
    //   runTime: 0,
    //   isFaborite: false};
    // debugger;
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
              <div className="rating__stars">
                <input className="rating__input" id="star-1" type="radio" name="rating" value="1"/>
                <label className="rating__label" htmlFor="star-1">Rating 1</label>

                <input className="rating__input" id="star-2" type="radio" name="rating" value="2" />
                <label className="rating__label" htmlFor="star-2">Rating 2</label>

                <input className="rating__input" id="star-3" type="radio" name="rating" value="3" checked />
                <label className="rating__label" htmlFor="star-3">Rating 3</label>

                <input className="rating__input" id="star-4" type="radio" name="rating" value="4" />
                <label className="rating__label" htmlFor="star-4">Rating 4</label>

                <input className="rating__input" id="star-5" type="radio" name="rating" value="5" />
                <label className="rating__label" htmlFor="star-5">Rating 5</label>
              </div>
            </div>

            <div className="add-review__text">
              <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
              <div className="add-review__submit">
                <button className="add-review__btn" type="submit">Post</button>
              </div>

            </div>
          </form>
        </div>

      </section>
    );
  }
}

AddReview.propTypes = {
  movies: propTypes.arrayOf(DEFAULT_PROPTYPES.MOVIE_CARD),
  // movieCard: DEFAULT_PROPTYPES.MOVIE_CARD,
  onReviewButtonSubmit: propTypes.func.isRequired,
  match: propTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  movies: getMovies(state)
});

const mapDispatchToProps = (dispatch) => ({
  onReviewButtonSubmit(id, review) {
    dispatch(DataOperation.sendReview(id, review));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddReview));

