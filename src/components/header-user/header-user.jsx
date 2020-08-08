import React from "react";
import {Link} from "react-router-dom";
import propTypes from "prop-types";
import {AuthorizationStatus} from "../../utils/const.js";
import {getAuthorizationStatus, getUserInfo} from "../../reducer/user/selector.js";
import {connect} from "react-redux";
import {Operation as UserOperation} from "../../reducer/user/user.js";

const HeaderUser = ({isSignIn, userInfo, logout}) => {
  const userLinkBlock = (isLogin) => {
    if (isLogin) {
      return (
        <React.Fragment>
          <Link className="user-block" to="/mylist">
            <div className="user-block__avatar">
              <img src={userInfo.avatarUrl} alt={userInfo.name} width="63" height="63" />
            </div>
          </Link>
          <div className="user-block">
            <button onClick={logout} className="user-block__link btn">Logout</button>
          </div>

        </React.Fragment>
      );
    } else {
      return (
        <Link to="/login" className="user-block__link user-block btn">
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
  logout: propTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  isSignIn: getAuthorizationStatus(state) === AuthorizationStatus.AUTH,
  userInfo: getUserInfo(state),
});

const mapDispatchToProps = (dispatch) => ({
  logout() {
    dispatch(UserOperation.logout());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderUser);
