import React, {PureComponent} from 'react';
import propTypes from 'prop-types';
import DEFAULT_PROPTYPES from "../prop-type-units/prop-types-units.js";
import {connect} from "react-redux";
import {getMovies, getSubmitStatus} from "../reducer/data/selector.js";
import {Operation as DataOperation, ActionCreator} from "../reducer/data/data.js";
import {withRouter} from "react-router-dom";
import {ReviewLength} from "../utils/const.js";

const withReview = (Component) => {
  class WithReview extends PureComponent {
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
      const {movieCard: {id}, onReviewButtonSubmit, onClearSubmitState} = this.props;
      onClearSubmitState();
      const review = {
        ratingScore: this.state.ratingScore,
        text: this.state.text
      };
      onReviewButtonSubmit(id, review);
    }

    componentWillUnmount() {
      const {onClearSubmitState} = this.props;
      onClearSubmitState();
    }

    render() {
      const {movieCard, submitStatus} = this.props;

      return (
        <Component
          {...this.props}
          movieCard = {movieCard}
          submitStatus = {submitStatus}
          onSubmitClick={this._handleSubmitButtonClick}
          onRatingChange={this._handleRatingChange}
          onReviewChange={this._handleReviewTextChange}
          isSubmitDisabled={this.state.isButtonDisabled}
        />
      );
    }
  }

  WithReview.propTypes = {
    movieCard: DEFAULT_PROPTYPES.MOVIE_CARD,
    onReviewButtonSubmit: propTypes.func.isRequired,
    submitStatus: propTypes.string.isRequired,
    onClearSubmitState: propTypes.func.isRequired
  };

  const mapStateToProps = (state) => ({
    movies: getMovies(state),
    submitStatus: getSubmitStatus(state)
  });

  const mapDispatchToProps = (dispatch) => ({
    onReviewButtonSubmit(id, review) {
      return dispatch(DataOperation.sendReview(id, review));
    },

    onClearSubmitState() {
      return dispatch(ActionCreator.clearSubmitStatus());
    }
  });

  return connect(mapStateToProps, mapDispatchToProps)(withRouter(WithReview));
};

export default withReview;
