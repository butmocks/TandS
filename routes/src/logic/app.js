const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('../data/gamedb.db');

db.serialize(() => {
  db.each(`SELECT * 
FROM whitegame
LIMIT 1 
OFFSET ABS(RANDOM()) % MAX((SELECT COUNT(*) FROM whitegame), 1)`, (err, row) => {
    console.log(`${row.task}`);
  });
});

db.close();
