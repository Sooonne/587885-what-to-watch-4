import React, {PureComponent} from "react";
import propTypes from "prop-types";
import Review from "../review/review.jsx";
import DEFAULT_PROPTYPES from "../../prop-type-units/prop-types-units.js";
import {Operation as DataOperation} from '../../reducer/data/data.js';
import {getReviewes} from "../../reducer/data/selector.js";
import {connect} from "react-redux";

const splitArray = (array, firstSlice, lastSlice) => {
  return array.slice(firstSlice, lastSlice);
};

class MoviePageReviews extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {loadMovieReviewes, id} = this.props;
    loadMovieReviewes(id);
  }

  render() {
    const {comments} = this.props;
    return (
      <React.Fragment>
        <div className="movie-card__reviews movie-card__row">
          <div className="movie-card__reviews-col">

            {splitArray(comments, 0, Math.round(comments.length / 2)).map((comment) => {
              return (
                <Review
                  key = {comment.id}
                  review = {comment}
                />
              );
            })}
          </div>

          <div className="movie-card__reviews-col">

            {splitArray(comments, Math.round(comments.length / 2 + 1), comments.length).map((comment) => {
              return (
                <Review
                  key = {comment.id}
                  review = {comment}
                />
              );
            })}

          </div>
        </div>
      </React.Fragment>
    );
  }
}

// const MoviePageReviews = ({id, loadMovieReviewes, comments}) => {
//   // loadMovieReviewes(id);
//   return (
//     <React.Fragment>
//       <div className="movie-card__reviews movie-card__row">
//         <div className="movie-card__reviews-col">

//           {splitArray(comments, 0, Math.round(comments.length / 2)).map((comment) => {
//             return (
//               <Review
//                 key = {comment.id}
//                 review = {comment}
//               />
//             );
//           })}
//         </div>

//         <div className="movie-card__reviews-col">

//           {splitArray(comments, Math.round(comments.length / 2 + 1), comments.length).map((comment) => {
//             return (
//               <Review
//                 key = {comment.id}
//                 review = {comment}
//               />
//             );
//           })}

//         </div>
//       </div>
//     </React.Fragment>
//   );
// };

MoviePageReviews.propTypes = {
  comments: propTypes.arrayOf(DEFAULT_PROPTYPES.REVIEW).isRequired,
  id: propTypes.number.isRequired,
  loadMovieReviewes: propTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  comments: getReviewes(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadMovieReviewes(movieId) {
    dispatch(DataOperation.loadMovieReviewes(movieId));
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(MoviePageReviews);

