import React, {PureComponent} from "react";
import propTypes from "prop-types";
import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import Player from "../player/player.jsx";
// import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import SignIn from "../sign-in/sign-in.jsx";
import {getAuthorizationStatus} from "../../reducer/user/selector.js";
import {AuthorizationStatus} from "../../utils/const.js";
import {connect} from 'react-redux';
import MyList from "../my-list/my-list.jsx";
import AddReview from "../add-review/add-review.jsx";
// import history from "../../history.js";

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {authStatus} = this.props;
    return (
      <Router
        // history={history}
      >
        <Switch>
          <Route exact path="/">
            <Main
            />
          </Route>
          <Route exact path="/movie/:id">
            <MoviePage
            />
          </Route>
          <Route exact pact="/movie/:id/review">
            <AddReview
            />
          </Route>
          <Route exact path="/player/:id">
            <Player/>
          </Route>
          <Route exact path="/login">
            {(authStatus === AuthorizationStatus.AUTH) ? <Redirect to="/" /> : <SignIn/>}
            {/* <SignIn/> */}
          </Route>
          <Route exact path="/mylist">
            {/* {loadMyMovies()} */}
            <MyList/>
          </Route>
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  authStatus: propTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authStatus: getAuthorizationStatus(state),
});

export default connect(mapStateToProps)(App);

