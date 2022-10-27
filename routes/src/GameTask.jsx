import React, { Component } from 'react';
import { Link, useState } from 'react-router-dom';

// class GameTask extends Component {


//   render() {

//     return (
//       console.log("hi")
//     )

//   }

// }
// export default GameTask

class GameTask extends Component {
  state = {
    text: null
  }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     text: null,
  //   };
  // }

  setText = text => {
    this.setState({
      text,
    });
  }
  render() {
    return (

      <div className="page page__content">
        {/* <div className="cart-title">{`${userData}, твій хід`}</div> */}

        <h3>наприклад</h3>
        <p>Раптом чомусь вийшло, що на одному з партнерів залишилося більше одягу!?
          З метою більшої справедливості роздягнений знімає одну частину одягу з другого гравця і замінює один жовтий фант на рожевий у колоді.</p>
        <button className="btn" onClick={() => this.setText()}>
          Text 1
        </button>
        <button className="btn" type='refresh'>Виконано</button>
        {/* <button className='resetButton' type="refresh" onClick={resetRadioState}>Замінити завдання</button> */}


        <button className="btn" type="refresh">Замінити завдання</button>

        {/* <button className='resetButton' type="refresh" onClick={resetRadioState}>Замінити завдання</button> */}

        <button className="btn">
          <Link to="/" >На головну</Link>
        </button>
        <button className="btn">
          <Link to="/gametype">Вибір режиму гри</Link>
        </button>

      </div>
    );
  };
}


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
export default GameTask;
