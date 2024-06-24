const db = require('./db');

const seedDatabase = () => {
    // creating database
    const query = `
        CREATE DATABASE IF NOT EXISTS zereko
    `;
    db.query(query, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Database created successfully');
    });
}
const seedUsers = () => {
    // creating table
    const query = `
        CREATE TABLE IF NOT EXISTS users (
            id INT PRIMARY KEY AUTO_INCREMENT,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL,
            imageUrl VARCHAR(255) NULL
        )
    `;
};

const seedProjects = () => {
    // creating table
    const query = `
        CREATE TABLE IF NOT EXISTS projects (
            id INT PRIMARY KEY AUTO_INCREMENT,
            title VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            date_debut DATE NOT NULL,
            date_fin DATE NOT NULL,
            created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        )
    `;
};

const seedMembers = () => {
    // creating table
    const query = `
        CREATE TABLE IF NOT EXISTS members (
            id INT PRIMARY KEY AUTO_INCREMENT,
            project_id INT NOT NULL,
            user_id INT NOT NULL,
            role VARCHAR(255) NOT NULL,
            created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        )
    `;
}

const runSeeders = async () => {
    await seedDatabase();
    await seedUsers();
    await seedProjects();
    await seedMembers();
};

runSeeders();
