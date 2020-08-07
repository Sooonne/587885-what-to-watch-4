import React from "react";
import {Link} from "react-router-dom";
import propTypes from "prop-types";
import {AuthorizationStatus} from "../../utils/const.js";
import {getAuthorizationStatus, getUserInfo} from "../../reducer/user/selector.js";
import {connect} from "react-redux";
// import HeaderLogo from "../header-logo/header-logo.jsx";

const HeaderUser = ({isSignIn, userInfo}) => {
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
      {userLinkBlock(isSignIn)}
    </React.Fragment>
  );
};

HeaderUser.propTypes = {
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

export default connect(mapStateToProps)(HeaderUser);
