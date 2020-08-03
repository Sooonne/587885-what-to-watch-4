import React, {PureComponent, createRef} from "react";
import {connect} from "react-redux";
import propTypes from "prop-types";
import {getErrorAuth} from "../../reducer/user/selector.js";
import Footer from "../footer/footer.jsx";

export class SignIn extends PureComponent {
  constructor(props) {
    super(props);

    this.loginRef = createRef();
    this.passRef = createRef();

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _renderErrorMessage() {
    const {isErrorAuth} = this.props;

    if (isErrorAuth) {
      return (
        <div className="sign-in__message">
          <p>We can’t recognize this email <br/> and password combination. Please try again.</p>
        </div>
      );
    }

    return null;
  }

  _handleSubmit(evt) {
    const {onSubmit} = this.props;

    evt.preventDefault();

    onSubmit({
      login: this.loginRef.current.value,
      password: this.passRef.current.value,
    });
  }

  render() {
    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>
          <h1 className="page-title user-page__title">Sign in</h1>
        </header>
        <div className="sign-in user-page__content">
          <form action="#" className="sign-in__form" onSubmit={this._handleSubmit}>
            {this._renderErrorMessage()}
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
  onSubmit: propTypes.func.isRequired,
  isErrorAuth: propTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  isErrorAuth: getErrorAuth(state)
});

export default connect(mapStateToProps)(SignIn);
