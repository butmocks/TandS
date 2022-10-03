import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ColourGameType from './ColourGameType.jsx';
import Home from './Home.jsx';
import PageNotFound from './PageNotFound.jsx';
import GameTask from './GameTask.jsx';
import Rules from './Rules'
// import Navigation from './components/Navigation';

// import React, { useState } from "react";

class App extends Component {


  render() {

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
              <ColourGameType />
            </Route>
            <Route path="/rules">
              <Rules />
            </Route>
            <Route path="/*">
              <PageNotFound />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }



};

export default App;
