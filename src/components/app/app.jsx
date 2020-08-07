import React, {PureComponent} from "react";
import propTypes from "prop-types";
import Main from "../main/main.jsx";
import Player from "../player/player.jsx";
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import SignIn from "../sign-in/sign-in.jsx";
import {getAuthorizationStatus} from "../../reducer/user/selector.js";
import {AuthorizationStatus, AppRoute} from "../../utils/const.js";
import {connect} from 'react-redux';
import MyList from "../my-list/my-list.jsx";
import MovieRoute from "../movie-route/movie-route.jsx";
// d

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {authStatus} = this.props;
    return (
      <Router>
        <Switch>
          <Route exact path={AppRoute.ROOT}>
            <Main
            />
          </Route>
          <Route path={`${AppRoute.MOVIE}/:id`}>
            <MovieRoute
            />
          </Route>
          <Route exact path={`${AppRoute.PLAYER}/:id`}>
            <Player/>
          </Route>
          <Route exact path={AppRoute.LOGIN}>
            {(authStatus === AuthorizationStatus.AUTH) ? <Redirect to="/" /> : <SignIn/>}
          </Route>
          <Route exact path={AppRoute.MY_LIST}>
            {(authStatus === AuthorizationStatus.AUTH) ? <MyList/> : <Redirect to={AppRoute.LOGIN} /> }
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

