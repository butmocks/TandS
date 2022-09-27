import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GameType from './GameType.jsx';
import Home from './Home.jsx';
import PageNotFound from './PageNotFound.jsx';
import GameTask from './GameTask.jsx';

const App = () => {
  return (
    <div className="page">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/start">
            <GameTask />
          </Route>
          <Route path="/gametype">
            <GameType />
          </Route>
          <Route path="/*">
            <PageNotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
