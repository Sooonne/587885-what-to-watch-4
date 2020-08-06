import React, {PureComponent} from "react";
import propTypes from "prop-types";
import Main from "../main/main.jsx";
import Player from "../player/player.jsx";
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import SignIn from "../sign-in/sign-in.jsx";
import {getAuthorizationStatus} from "../../reducer/user/selector.js";
import {AuthorizationStatus} from "../../utils/const.js";
import {connect} from 'react-redux';
import MyList from "../my-list/my-list.jsx";
import MovieRoute from "../movie-route/movie-route.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {authStatus} = this.props;
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Main
            />
          </Route>
          <Route path="/movie/:id">
            <MovieRoute
            />
          </Route>
          <Route exact path="/player/:id">
            <Player/>
          </Route>
          <Route exact path="/login">
            {(authStatus === AuthorizationStatus.AUTH) ? <Redirect to="/" /> : <SignIn/>}
          </Route>
          <Route exact path="/mylist">
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

