import React, {PureComponent} from "react";
import propTypes from 'prop-types';
import Footer from "../footer/footer.jsx";
import MovieList from "../movie-list/movie-list.jsx";
import DEFAULT_PROPTYPES from "../../prop-type-units/prop-types-units.js";
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import {getUserInfo} from "../../reducer/user/selector.js";
import {getMoviesFromMyList} from "../../reducer/data/selector.js";
import {Operation as DataOperation} from '../../reducer/data/data.js';

class MyList extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {loadMyMovies} = this.props;
    loadMyMovies();
  }

  render() {
    const {favoriteMovies, userInfo} = this.props;
    return (
      <React.Fragment>

        <div className="user-page">

          <header className="page-header user-page__head">
            <div className="logo">
              <Link to="/" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <h1 className="page-title user-page__title">My list</h1>

            <Link className="user-block" to="/mylist">
              <div className="user-block__avatar">
                <img src={userInfo.avatarUrl} alt={userInfo.name} width="63" height="63" />
              </div>
            </Link>
          </header>


          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>

            <MovieList
              movies = {favoriteMovies}
            />
          </section>

          <Footer/>
        </div>
      </React.Fragment>
    );
  }

}

MyList.propTypes = {
  userInfo: propTypes.shape({
    id: propTypes.number.isRequired,
    email: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    avatarUrl: propTypes.string.isRequired,
  }),
  favoriteMovies: propTypes.arrayOf(DEFAULT_PROPTYPES.MOVIE_CARD),
  loadMyMovies: propTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  userInfo: getUserInfo(state),
  favoriteMovies: getMoviesFromMyList(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadMyMovies() {
    dispatch(DataOperation.loadFavoriteMovies());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MyList);
