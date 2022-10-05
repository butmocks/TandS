import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ColorGameType from './ColorGameType.jsx';
import Home from './Home.jsx';
import PageNotFound from './PageNotFound.jsx';
import GameTask from './GameTask.jsx';
import Rules from './Rules.jsx'
// import Navigation from './components/Navigation';

// import React, { useState } from "react";

class App extends Component {


  render() {

    return (
      <div className="page">

        <BrowserRouter>

          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/start" element={<GameTask />} />
            <Route path="/gametype" element={<ColorGameType />} />
            <Route path="/rules" element={<Rules />} />

            <Route path="/*" element={<PageNotFound />} />

          </Routes>
        </BrowserRouter>
      </div>
    )
  }



};

export default App;

{/* <Route path="/" element={<Home />} />  */ }