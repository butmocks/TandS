import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ColorGameType from './ColorGameType.jsx';
import Home from './Home.jsx';
import PageNotFound from './PageNotFound.jsx';
import GameTask from './GameTask.jsx';
import Rules from './Rules.jsx'
import ColorGameTask from './ColorGameTask.jsx';
import Admin from './Admin.jsx'

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
            <Route path="/task" element={<ColorGameTask />} /> 
            <Route path='/admin' element={<Admin />} /> 
          </Routes>
        </BrowserRouter>
      </div>
    )
  }



};

export default App;

{/* <Route path="/" element={<Home />} />  */ }

// const sqlite3 = require('sqlite3').verbose()

// // open the database
// let db = new sqlite3.Database('./gamedb.db', sqlite3.OPEN_READWRITE, (err) => {
//   if (err) {
//     console.error(err.message);
//   }
//   console.log('Connected to the chinook database.');
// });

// db.serialize(() => {
//   db.each(`SELECT id as id,
//                   task as task
//            FROM whitegame`, (err, row) => {
//     if (err) {
//       console.error(err.message);
//     }
//     console.log(row.id + "\t" + row.question);
//   });
// });

// db.close((err) => {
//   if (err) {
//     console.error(err.message);
//   }
//   console.log('Close the database connection.');
// });