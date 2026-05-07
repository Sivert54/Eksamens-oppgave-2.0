// db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',       // Docker eksponerer 3306 til maskinen din
    user: 'myuser',
    password: 'mypassword',
    database: 'mydb'
});

connection.connect(err => {
    if (err) {
        console.error('❌ Klarte ikke koble til databasen:', err);
        return;
    }
    console.log('✅ Koblet til MySQL!');

    // Eksempelspørring (valgfritt)
    connection.query('SELECT 1 + 1 AS result', (err, rows) => {
        if (err) throw err;
        console.log('Resultat fra SQL:', rows[0].result);

        connection.end();
    });
});