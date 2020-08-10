import React, {PureComponent, createRef} from "react";
import {connect} from "react-redux";
import propTypes from "prop-types";
import {getErrorAuth} from "../../reducer/user/selector.js";
import Footer from "../footer/footer.jsx";
import {Link} from "react-router-dom";
import {Operation as UserOperation} from "../../reducer/user/user.js";
import Loading from "../loading/loading.jsx";

export class SignIn extends PureComponent {
  constructor(props) {
    super(props);

    this.loginRef = createRef();
    this.passRef = createRef();

    this._handleSubmit = this._handleSubmit.bind(this);
    this._renderErrorMessage = this._renderErrorMessage.bind(this);

  }

  _renderErrorMessage(isError) {
    if (isError) {
      return (
        <div className="sign-in__message">
          <p>Please enter a valid email address</p>
        </div>
      );
    }

    return null;
  }

  _handleSubmit(evt) {
    const {onFormSubmit} = this.props;
    // debugger;
    const submitData = {
      login: this.loginRef.current.value,
      password: this.passRef.current.value,
    };
    evt.preventDefault();
    onFormSubmit(submitData);
    // if (!isErrorAuth) {
    //   return <Redirect to="/"/>;
    // }
  }

  render() {
    const {isErrorAuth} = this.props;
    if (!this.props) {
      return (
        <Loading/>
      );
    }
    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <Link to="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>
          <h1 className="page-title user-page__title">Sign in</h1>
        </header>
        <div className="sign-in user-page__content">
          <form action="#" className="sign-in__form" onSubmit={this._handleSubmit}>
            {this._renderErrorMessage(isErrorAuth)}
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input
                  className="sign-in__input"
                  type="email"
                  placeholder="Email address"
                  name="user-email"
                  id="user-email"
                  required
                  ref={this.loginRef}
                />
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input
                  className="sign-in__input"
                  type="password"
                  placeholder="Password"
                  name="user-password"
                  id="user-password"
                  required
                  ref={this.passRef}
                />
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit">Sign in</button>
            </div>
          </form>
        </div>
        <Footer/>
      </div>
    );
  }
}

SignIn.propTypes = {
  onFormSubmit: propTypes.func.isRequired,
  isErrorAuth: propTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  isErrorAuth: getErrorAuth(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFormSubmit(authData) {
    dispatch(UserOperation.signIn(authData));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
