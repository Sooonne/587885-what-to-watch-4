import React from "react";
import {Link} from "react-router-dom";
import propTypes from "prop-types";
import {AuthorizationStatus} from "../../utils/const.js";
import {getAuthorizationStatus, getUserInfo} from "../../reducer/user/selector.js";
import {connect} from "react-redux";

const Header = ({isSignIn, userInfo}) => {
  const userLinkBlock = (isLogin) => {
    if (isLogin) {
      return (
        /* здесь будет ссылка на my list*/
        <Link className="user-block" to="/mylist">
          <div className="user-block__avatar">
            <img src={userInfo.avatarUrl} alt={userInfo.name} width="63" height="63" />
          </div>
        </Link>
      );
    } else {
      return (
        <Link to="/login" className="user-block btn">
        Sign In
        </Link>
      );
    }
  };

  return (
    <React.Fragment>
      <header className="page-header movie-card__head">
        <div className="logo">
          <Link to="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        {userLinkBlock(isSignIn)}
      </header>
    </React.Fragment>
  );
};

Header.propTypes = {
  isSignIn: propTypes.bool.isRequired,
  userInfo: propTypes.shape({
    id: propTypes.number.isRequired,
    email: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    avatarUrl: propTypes.string.isRequired,
  }),
};

const mapStateToProps = (state) => ({
  isSignIn: getAuthorizationStatus(state) === AuthorizationStatus.AUTH,
  userInfo: getUserInfo(state),
});

// export default Header;
export default connect(mapStateToProps)(Header);
