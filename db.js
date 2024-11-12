require('dotenv').config();
const mysql = require('mysql2');

// Usa la URL de Railway si está disponible, de lo contrario usa la configuración local
const connection = mysql.createConnection(
  process.env.MYSQL_URL || {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  }
);

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

module.exports = connection;


