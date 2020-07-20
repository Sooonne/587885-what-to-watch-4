import propTypes from "prop-types";

const DEFAULT_PROPTYPES = {
  MOVIE_CARD: propTypes.shape({
    title: propTypes.string.isRequired,
    genre: propTypes.string.isRequired,
    release: propTypes.number.isRequired,
    bg: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    director: propTypes.string.isRequired,
    starring: propTypes.arrayOf(propTypes.string.isRequired).isRequired,
    ratingScore: propTypes.number.isRequired,
    ratingCount: propTypes.number.isRequired
  }).isRequired,
  REVIEW: propTypes.shape({
    id: propTypes.number.isRequired,
    user: propTypes.shape({
      id: propTypes.number.isRequired,
      name: propTypes.string.isRequired
    }),
    rating: propTypes.number.isRequired,
    comment: propTypes.string.isRequired,
    date: propTypes.string.isRequired
  })
};

export default DEFAULT_PROPTYPES;
