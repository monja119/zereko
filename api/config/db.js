const mysql = require('mysql2');
const path = require('path');

// Configuration de la connexion MySQL
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'zereko'
};

// Création de la connexion MySQL
const db = mysql.createConnection(dbConfig);

// Connexion à la base de données
db.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données:', err);
        return;
    }
    console.log('Connecté à la base de données MySQL');
});

// users
db.query(`
    CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        email VARCHAR(255) UNIQUE,
        password VARCHAR(255),
        imageUrl TEXT
    )
`, (err, results) => {
    if (err) {
        console.error('Erreur lors de la création de la table users:', err);
        return;
    }
    console.log('Table users créée ou déjà existante');
});


// Exportation de la connexion de la base de données
module.exports = db;
