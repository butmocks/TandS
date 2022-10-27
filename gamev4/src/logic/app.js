// const sqlite3 = require('sqlite3').verbose();
// const db = new sqlite3.Database('db.sqlite3');

// db.serialize(() => {
//   db.run("CREATE TABLE lorem (info TEXT)");

//   const stmt = db.prepare("INSERT INTO lorem VALUES (?)");
//   for (let i = 0; i < 10; i++) {
//     stmt.run("Ipsum " + i);
//   }
//   stmt.finalize();

//   db.each("SELECT rowid AS id, info FROM lorem", (err, row) => {
//     console.log(row.id + ": " + row.info);
//   });
// });

// db.close();


// const sqlite3 = require('sqlite3').verbose();
// const db = new sqlite3.Database(':memory:');

// db.serialize(() => {
//   db.run("CREATE TABLE lorem (info TEXT)");

//   const stmt = db.prepare("INSERT INTO lorem VALUES (?)");
//   for (let i = 0; i < 10; i++) {
//     stmt.run("Ipsum " + i);
//   }
//   stmt.finalize();

//   db.each("SELECT rowid AS id, info FROM lorem", (err, row) => {
//     console.log(row.id + ": " + row.info);
//   });
// });

// db.close();




const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('../data/gamedb.db');


// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'me',
//   password : 'secret',
//   database : 'my_db'
// });

// connection.connect();

// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });

// connection.end();



// open the database
// let db1 = new Database('db.sqlite3', OPEN_READWRITE, (err, row) => {
//   if (err) {
//     console.log(row.id + ": " + row.info)
//   }
//   console.log('Connected to the chinook database.');
// });

// function DataTask() {
//   const dataText = db.serialize(() => {
//     db.each(`SELECT *
//     FROM whitegame
// LIMIT 1 
// OFFSET ABS(RANDOM()) % MAX((SELECT COUNT(*) FROM whitegame), 1)`)
// return console.log(DataTask())
// })
// }

// function DataTask() {

  db.serialize(() => {
    db.each(`SELECT *
    FROM whitegame
LIMIT 1 
OFFSET ABS(RANDOM()) % MAX((SELECT COUNT(*) FROM whitegame), 1)`,

      (err, row) => {
        if (err) {
          console.error(err.message);
        }

        console.log(row.id + "\t" + row.task)
      });
  });

  db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Close the database connection.');
  });

// console.log(DataTask())

// // SELECT *
// //   FROM redgame
// // LIMIT 1 
// // OFFSET ABS(RANDOM()) % MAX((SELECT COUNT(*) FROM redgame), 1)

// // `SELECT id as id,
// //                   task as task
// //            FROM whitegame`