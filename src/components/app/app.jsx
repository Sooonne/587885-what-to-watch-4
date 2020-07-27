import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Main
            />
          </Route>
          <Route exact path="/main">
            <Main
            />
          </Route>
          <Route path="/movie/:id">
            <MoviePage
            />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export {App};
