const sqlite3 = require('sqlite3')
const db = new sqlite3.Database('../src/data/gamedb.db');

db.serialize(() => {
  db.each(`SELECT * 
FROM whitegame
LIMIT 1 
OFFSET ABS(RANDOM()) % MAX((SELECT COUNT(*) FROM whitegame), 1)`, (err, row) => {
    console.log(`${row.task}`);
  });
});
console.log(db)
db.close();
