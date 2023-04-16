import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import MainPage from "./pages/MainPage";
import MovieDetail from "./pages/MovieDetail";
import TvPage from "./pages/TvPage";
import TvDetail from "./pages/TvDetail";


function App() {
    return (
      <Router>
          <Switch>
              <Route exact path="/" component={MainPage}></Route>
              <Route path="/tv" component={TvPage}></Route>
              <Route path="/movie/:id" component={MovieDetail}></Route>
              <Route path="/tv/:id" component={TvDetail}></Route>
          </Switch>
      </Router>
  )
}

export default App;
