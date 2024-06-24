const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// eslint-disable-next-line no-undef
const dbPath = path.resolve(__dirname, 'zereko.db');
const db = new sqlite3.Database(dbPath);
console

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
             id INTEGER PRIMARY KEY AUTOINCREMENT,
             name VARCHAR(255),
            email VARCHAR(255) UNIQUE,
            password VARCHAR(255),
            imageUrl TEXT
            )
    `);
});


// eslint-disable-next-line no-undef
module.exports = db;
